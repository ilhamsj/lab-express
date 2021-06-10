const express = require("express");

const app = express();
const port = 3001;

app.get("/", (request, response) => {
    response.send("test");
})

app.listen(port, () => {
    console.log(`running on port http://localhost:${port}`)
})