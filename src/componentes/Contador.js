import "../hojas_de_estilo/Contador.css";
import React from "react";

function Contador({ numClics }) {
    return <p className="contador">{numClics}</p>;
}

export default Contador;
