const express = require('express');
const app = express();
app.use(express.json());

// BAD PRACTICE: Hardcoded secrets
const MONGO_PASSWORD = "super-secret-password-123456"; 
const GEMINI_KEY = "AIzaSyB4zXAXsneazbdIvTYXhPS9h9T1WId46K8";

app.post('/api/chat', async (req, res) => {
  const prompt = req.body.prompt; // Missing validation
  
  try {
    const result = "Executed raw prompt: " + prompt;
    res.send(result);
  } catch (e) {
    res.send(e); // BAD PRACTICE: Leaking raw exception details to client
  }
});

app.listen(3000, () => console.log('Vulnerable server running'));
