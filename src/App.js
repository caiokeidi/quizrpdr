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
  const [n, setN] = useState(0);

  function mainContent() {
    if (arrPerguntas === "") {
      return <MainScreen />;
    } else if (!fim) {
      return (
        <MainContent
          arrPerguntas={arrPerguntas}
          acertos={acertos}
          setAcertos={setAcertos}
          setFim={setFim}
          n = {n}
          setN = {setN}
        />
      );
    } else {
      return <Resultado acertos={acertos} />;
    }
  }

  function categoriaSelecionada(id) {
    setFim(false)
    setAcertos(0)
    setN(0)
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
