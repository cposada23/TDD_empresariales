var express = require('express');
var CodeBreaker = require('./main');

var app = express();
app.set('port', (process.env.PORT || 3000));

app.get('/setsecret/:secret', function (req, res) {
  number = req.params.secret;
  CodeBreaker.setNum(number);
  res.send({message: 'ok, let the game begin'});
});

app.get('/guess/:number', function (req, res) {
  number = req.params.number;
  result = CodeBreaker.codeBreaker(number);
  res.send({result:result});
})

app.listen(app.get('port'), () => {
  console.log(`Escuchando en el puerto ${app.get('port')}`);
});

module.exports = app;
