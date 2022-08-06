import "./App.css";
import logo from "./imagenes/freecodecampLogo.jpg";
import Contador from "./componentes/Contador.js";
import Boton from "./componentes/Boton.js";
import { useState } from "react";

function App() {
    const [numClics, setNumClics] = useState(0);

    const incrementarContador = () => {
        console.log("clic");
        setNumClics(numClics + 1);
    };

    const reiniciarContador = () => {
        console.log("reiniciar");
        setNumClics(0);
    };

    return (
        <div className="App">
            <div className="contenedorPrincipal">
                <header>
                    <img id="hero" alt="logo freecodecamp" src={logo} />
                </header>

                <main className="main">
                    <Contador numClics={numClics}></Contador>
                    <Boton
                        esBotonDeClic={true}
                        manejarClic={incrementarContador}
                    ></Boton>
                    <Boton
                        esBotonDeClic={false}
                        manejarClic={reiniciarContador}
                    ></Boton>
                </main>
            </div>
        </div>
    );
}

export default App;
