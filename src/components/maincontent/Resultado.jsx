import React from "react";
import "./MainContent.css";

function Resultado(props) {
  var acertos = props.acertos;

  function mensagemResultado() {
    if (acertos <= 5) {
      return (
        <p>
          Sashay Away! Você infelizmente não foi bem, mas o bom daqui, é que
          você pode sempre tentar de novo!
        </p>
      );
    } else if (acertos > 5 && acertos < 9) {
      return (
        <p>
          Shantay you stay! Tiveram alguns erros, mas mesmo assim você superou
          esse desafio! Parabéns!
        </p>
      );
    } else {
      return (
        <p>
          You are a Winner baby! Caramba você realmente é um super fã de Drag Race! 
          Condragulation!
        </p>
      );
    }
  }

  return (
    <section className="MainContent">
      <div className="MainBoxScreen">
        <h1>RESULTADO</h1>
        <h2>Você acertou {acertos} de 10 perguntas!</h2>
        <div className="mensagem">{mensagemResultado()}</div>
        <h3>Escolha outra categoria ao lado.</h3>
      </div>
    </section>
  );
}

export default Resultado;
