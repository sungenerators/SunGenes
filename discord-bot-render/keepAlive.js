const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bot is alive!');
});

const PORT = process.env.PORT || 3000;
module.exports = function keepAlive() {
  app.listen(PORT, () => {
    console.log(`Servidor activo en el puerto ${PORT}`);
  });
};