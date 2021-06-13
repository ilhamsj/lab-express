const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const port = 3001;

const { productRoutes } = require('./src/app/routes/index')

// body parser
app.use(bodyParser.json())

// routes
app.use('/products', productRoutes)

app.listen(port, () => {
    console.log(`running on port http://localhost:${port}`)
})

module.exports = app