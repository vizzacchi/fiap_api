const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

app.get("/", function (req, res){
    res.send("Douglas é FODA!!!!");
});

app.listen(port, () => {
    console.info("Primeira API FIAP rodando!!!");
});