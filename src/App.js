import "./App.css";
import React, { useState } from "react";
import MainContent from "./components/MainContent/MainContent";
import MainScreen from "./components/MainContent/MainScreen";
import SideBar from "./components/SideBar/SideBar";
import perguntas from './data/perguntas/index'

function App() {
  const [arrPerguntas, setArrPerguntas] = useState('');

  function mainContent(){
    if(arrPerguntas ===''){
      return <MainScreen/>
    }else{
      return <MainContent arrPerguntas={arrPerguntas}/>
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
