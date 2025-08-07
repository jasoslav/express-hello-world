const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// example to check: https://express-hello-world-0ro6.onrender.com/
// result example: {"company":"My Company","timestampNow":1754568859972}
app.get('/', (req, res) => {
  res.json({ company: 'My Company', timestampNow: Date.now() });
});

// JSON odpoveď pre root endpoint
// example to check: https://express-hello-world-0ro6.onrender.com/timestamptodate?timestamp=1691660000   2023‑08‑10T06:26:40Z

app.get('/timestamptodate', (req, res) => {
  const timestamp = Number(req.query.timestamp);
  if (isNaN(timestamp)) {
    return res.status(400).json({ error: 'Timestamp musí byť platné číslo.' });
  }
  const date = new Date(timestamp);
  res.json({ isoDate: date.toISOString() });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});
