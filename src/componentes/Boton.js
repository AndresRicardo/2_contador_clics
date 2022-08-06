import "../hojas_de_estilo/Boton.css";
import React from "react";

function Boton({ esBotonDeClic, manejarClic }) {
    return (
        <button
            className={esBotonDeClic ? "BotonClics" : "BotonReiniciar"}
            onClick={manejarClic}
        >
            {esBotonDeClic ? "Clic" : "Reiniciar"}
        </button>
    );
}

export default Boton;
