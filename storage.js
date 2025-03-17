// Auto-generated Storage Handler for GlobalBlockInc
const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

// Upload route
app.post('/upload', (req, res) => {
  res.send('File upload received');
});

// Download route
app.get('/download/:id', (req, res) => {
  res.send(`File download requested for ID: ${req.params.id}`);
});

app.listen(port, () => {
  console.log(`GlobalBlock Storage Handler listening on port ${port}`);
});
