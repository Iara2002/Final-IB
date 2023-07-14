const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const newCart = req.body;

});

router.get('/:cid', (req, res) => {
  const cartId = req.params.cid;

});

router.post('/:cid/product/:pid', (req, res) => {
  const cartId = req.params.cid;
  const productId = req.params.pid;
  const quantity = req.body.quantity;
  
});

module.exports = router;
