const express = require('express');
const serverless = require('serverless-http');
const crypto = require('crypto');
const cors = require('cors');

const app = express();

// Use express.raw for the webhook to properly compute the HMAC signature
app.use('/api/webhook', express.raw({ type: 'application/json' }));
app.use(express.json());
app.use(cors());

const APP_SECRET = process.env.APP_SECRET || 'mock_app_secret_for_development';
const VERIFY_TOKEN = process.env.VERIFY_TOKEN || 'mock_verify_token';

// Webhook challenge endpoint (GET)
app.get('/api/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode && token) {
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  } else {
    res.sendStatus(400);
  }
});

// Webhook receiver endpoint (POST)
app.post('/api/webhook', (req, res) => {
  const signature = req.headers['x-hub-signature-256'];
  if (!signature) {
    return res.status(403).send('Signature missing');
  }

  // Compute HMAC-SHA256 signature
  const hmac = crypto.createHmac('sha256', APP_SECRET);
  hmac.update(req.body);
  const expectedSignature = `sha256=${hmac.digest('hex')}`;

  try {
    // Constant-time comparison
    if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
      console.error('Invalid signature');
      return res.status(403).send('Invalid signature');
    }
  } catch (err) {
    console.error('Error comparing signatures:', err);
    return res.status(403).send('Invalid signature format');
  }

  // Parse the raw body back to JSON for business logic
  const payload = JSON.parse(req.body.toString());
  console.log('Valid WhatsApp Webhook received:', JSON.stringify(payload, null, 2));

  // Acknowledge receipt
  res.status(200).send('EVENT_RECEIVED');
});

// Mock Twilio / Exotel Click-to-Call endpoint
app.post('/api/call', (req, res) => {
  const { phoneNumber } = req.body;
  
  if (!phoneNumber) {
    return res.status(400).json({ error: 'Phone number is required' });
  }

  console.log(`[Twilio/Exotel Mock API] Initiating outbound call to ${phoneNumber} and bridging to receptionist.`);
  
  res.status(200).json({ 
    success: true, 
    message: 'Call successfully bridged.', 
    callSid: 'CA' + crypto.randomBytes(16).toString('hex')
  });
});

module.exports.handler = serverless(app);
