const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// JSON odpoveď pre root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello from your JSON API', status: 'ok', timestamp: Date.now() });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});
