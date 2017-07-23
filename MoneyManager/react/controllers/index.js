var express = require ('express')
var router = new express.Router()

router.use('/transactions', require('./transaction_controller.js'));

app.get('/', function (req, res) {
  console.log("cabbage");
  res.sendFile(`${__dirname}/client/build/index.html`);
});

// export default router
