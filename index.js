const express = require("express");

const app = express();
const port = 3001;

app.get("/", (request, response) => {
    var data = {
        success: true,
        message: "Data Successfully Retrieved",
        data: [
            {
                nama: "ilhams",
                kelas: 1
            }
        ],
        code: 200,
        version: 1
    }
    response.status(200).json(data)
})

app.listen(port, () => {
    console.log(`running on port http://localhost:${port}`)
})