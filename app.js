const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// JSON odpoveď pre root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello from your JSON API', status: 'ok', timestamp: Date.now() });
});

// JSON odpoveď pre root endpoint
app.get('/timestamptodate', (req, res) => {
  const timestamp = Number(req.query.timestamp);
  if (isNaN(timestamp)) {
    return res.status(400).json({ error: 'Timestamp musí byť platné číslo.' });
  }
  const date = new Date(timestamp * 1000);
  res.json({ isoDate: date.toISOString() });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});
