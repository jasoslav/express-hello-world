const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// JSON odpoveď pre root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello from your JSON API', status: 'ok', timestamp: Date.now() });
});

// JSON odpoveď pre root endpoint
app.get('/timestamptodate', (req, res) => {
  const { timestamp } = req.body;

  // Overíme, že timestamp je číslo
  if (typeof timestamp !== 'number') {
    return res.status(400).json({ error: 'Timestamp musí byť číslo (Unix timestamp v sekundách).' });
  }

  // JavaScript Date pracuje s milisekundami, preto násobíme 1000
  const date = new Date(timestamp * 1000);
  const isoString = date.toISOString(); // formátuje na ISO 8601 (napr. "2023‑08‑10T01:13:20.000Z") :contentReference[oaicite:1]{index=1}

  res.json({ isoDate: isoString });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});
