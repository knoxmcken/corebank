const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to CoreBank!');
});


// Sync models with the database
sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(err => {
    console.error('Error synchronizing the database:', err);
  });


app.listen(PORT, () => {
  console.log(`CoreBank server is running on port ${PORT}`);



});

