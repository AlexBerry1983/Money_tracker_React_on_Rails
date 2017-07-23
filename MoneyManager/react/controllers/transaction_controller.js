var express = require ('express')
var transactionRouter = new express.Router();

transactionRouter.get('/transactions', function(req, res){
  res.json("cabbage");
})

export default transactionRouter
