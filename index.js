const express = require("express");

const app   = express();
const port  = 3001;

app.get("/", (request, response) => {
    response.send();
})