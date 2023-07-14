const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Importar routers
const productsRouter = require('./products');
const cartsRouter = require('./carts');


app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);


app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
