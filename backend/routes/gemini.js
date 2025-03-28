const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateText?key=${process.env.GEMINI_API_KEY}`,
      { prompt }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Gemini API request failed' });
  }
});

module.exports = router;
