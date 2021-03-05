import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import SideBar from "./components/SideBar/SideBar";
import perguntas from './data/perguntas/index'

function App() {
  return (
    <>
      <section className="content">
        <MainContent />
        <SideBar categoriaSelecionada={categoriaSelecionada} />
      </section>
    </>
  );
}

function categoriaSelecionada(id) {
  console.log(perguntas[id])
}

export default App;
