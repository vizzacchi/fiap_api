const express = require("express");
const app = express();
var saida;

const port = process.env.PORT || 3000;

app.get("/", function (req, res){
    if (!navigator.geolocation)
        return null;
    navigator.geolocation.getCurrentPosition((pos) => {
        latUser = document.getElementById("lat").innerText = pos.coords.latitude;
        lonUser = document.getElementById("lon").innerText = pos.coords.longitude;
        saida =  "{lat: "+latUser+",lon: "+lonUser+"}";
    })



    res.send(saida);
});

app.listen(port, () => {
    console.info("Primeira API FIAP rodando!!!");
});