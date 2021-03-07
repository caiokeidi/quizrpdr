import "./App.css";
import React, { useState } from "react";
import MainContent from "./components/MainContent/MainContent";
import MainScreen from "./components/MainContent/MainScreen";
import SideBar from "./components/SideBar/SideBar";
import perguntas from "./data/perguntas/index";
import Resultado from "./components/MainContent/Resultado";

function App() {
  const [arrPerguntas, setArrPerguntas] = useState("");
  const [acertos, setAcertos] = useState(0);
  const [fim, setFim] = useState(false);

  
  function mainContent() {
    if (arrPerguntas === "") {
      return <MainScreen />;
    } else if (!fim){
      return (
        <MainContent                                      
          arrPerguntas={arrPerguntas}
          acertos={acertos}
          setAcertos={setAcertos}
          setFim = {setFim}
        />
      );
    } else {
      return(
        <Resultado/>
      )
    }
  }

  function categoriaSelecionada(id) {
    setArrPerguntas(perguntas[id]);
  }

  return (
    <>
      <section className="content">
        {mainContent()}
        <SideBar categoriaSelecionada={categoriaSelecionada} />
      </section>
    </>
  );
}

export default App;
