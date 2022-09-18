const express = require("express");
const app = express();

const port = process.env.Port || 3000;

app.get("/", function (req, res){
    res.send("Douglas é FODA!!!!");
});

app.listen(port, () => {
    console.info("Primeira API FIAP rodando em http://localhost");
});
