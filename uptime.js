app = require('express')();

app.get('/', (req, res) => res.send('Bot has been online and ready to use ^-^'));

app.get("/", (request, response) => {
  console.log("Ping sudah diterima gaynn");
  response.sendStatus(200);
});

module.exports = () => {
  app.listen(3000);
}