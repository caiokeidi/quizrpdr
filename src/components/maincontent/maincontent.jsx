import React, { useState } from "react";
import "./MainContent.css";

function MainContent() {
  const [perguntas, setPerguntas] = useState([]);
  const [pergunta, setPergunta] = useState({
    img: require("../../assets/imgs/geral/sasha.jpeg"),
    pergunta: "Qual a idade de Sasha Velour?",
    1: "35 anos",
    2: "36 anos",
    3: "28 anos",
    4: "29 anos",
    correta: 4,
  });

  return (
    <section className="MainContent">
      <div className="MainBox">
        <div className="header_perguntas">
          <h2>PERGUNTA 1</h2>
        </div>
        <div className="img_box">
          <img
            src={pergunta.img.default}
            alt="Foto da Sasha Velour tirando as pétalas da peruca"
            className="img_pergunta"
          />
        </div>
        <div className="div_pergunta">
          <p>{pergunta.pergunta}</p>
        </div>
        <div className="div_respostas">
          <div className="div_respostas_linha">
            <div onClick={resposta_escolhida} className="btm_respostas" id="1">
              {pergunta[1]}
            </div>
            <div onClick={resposta_escolhida} className="btm_respostas" id="2">
              {pergunta[2]}
            </div>
          </div>
          <div className="div_respostas_linha">
            <div onClick={resposta_escolhida} className="btm_respostas" id="1">
              {pergunta[3]}
            </div>
            <div onClick={resposta_escolhida} className="btm_respostas" id="2">
              {pergunta[4]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function resposta_escolhida(btm) {
  console.log(btm.id);
}

export default MainContent;
