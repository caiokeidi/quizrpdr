import React from "react";
import "./MainContent.css";

function Resultado(props) {
  var acertos = props.acertos;

  return (
    <section className="MainContent">
      <div className="MainBoxScreen">
        <h1>RESULTADO</h1>
        <div className="img_box">
          <img
            src={imgResultado(acertos).default}
            alt="Foto da Pergunta"
            className="img_pergunta"
          />
        </div>
        <h2>Você acertou {acertos} de 10 perguntas!</h2>
        <div className="mensagem">{mensagemResultado(acertos)}</div>
        <h3>Escolha outra categoria ao lado.</h3>
      </div>
    </section>
  );
}

export default Resultado;

function mensagemResultado(acertos) {
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

function imgResultado(acertos){
  if (acertos <= 5) {
    return (
      require("../../assets/imgs/geral/sasha.jpeg")
    );
  } else if (acertos > 5 && acertos < 9) {
    return (
      require("../../assets/imgs/geral/sasha.jpeg")
    );
  } else {
    return (
      require("../../assets/imgs/geral/sasha.jpeg")
    );
  }
}