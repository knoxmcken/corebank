const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to CoreBank!');
});

app.listen(PORT, () => {
  console.log(`CoreBank server is running on port ${PORT}`);
});

