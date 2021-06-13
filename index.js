const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const port = 3001;


const productRoutes = require('./src/app/routes/product.route')

app.use(bodyParser.json())

app.use('/products', productRoutes)

app.listen(port, () => {
    console.log(`running on port http://localhost:${port}`)
})

module.exports = app