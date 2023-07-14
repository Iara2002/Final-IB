const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
 
});

router.get('/:pid', (req, res) => {
  const productId = req.params.pid;
  
});

router.post('/', (req, res) => {
  const newProduct = req.body;
 
});

router.put('/:pid', (req, res) => {
  const productId = req.params.pid;
  const updatedProduct = req.body;
  
});

router.delete('/:pid', (req, res) => {
  const productId = req.params.pid;
 
});

module.exports = router;
