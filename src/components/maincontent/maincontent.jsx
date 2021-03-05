import React, { useState } from "react";
import "./MainContent.css";

function MainContent(props) {
  const [n, setN] = useState(0);
  var pergunta = props.arrPerguntas[n];

  function proxima() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(i).classList = 'btm_respostas';
    }
    setN(n + 1);
  }

  function resposta_escolhida(btm) {
    for (let i = 1; i <= 4; i++) {
      if (btm.target.id === pergunta.correta.toString()) {
        if (i == pergunta.correta) {
          btm_correto(i)
        } else {
          btm_desativado(i);
        }
      } else {
        if (i == pergunta.correta) {
          btm_corretoDesativado(i);
        } else if (i == btm.target.id) {
          btm_incorreto(i);
        } else {
          btm_desativado(i);
        }
      }
    }
  }



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
            <div onClick={resposta_escolhida} className="btm_respostas" id="3">
              {pergunta[3]}
            </div>
            <div onClick={resposta_escolhida} className="btm_respostas" id="4">
              {pergunta[4]}
            </div>
          </div>
          <div className="div_respostas_linha">
            <div onClick={proxima} className="btm_respostas btm_proxima" id="1">
              Próxima
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function btm_correto(n){
    document.getElementById(n).classList.add("correto");
}

function btm_incorreto(n){
    document.getElementById(n).classList.add("incorreto");
}

function btm_corretoDesativado(n){
    document.getElementById(n).classList.add("corretoDesativado");
}

function btm_desativado(n){
    document.getElementById(n).classList.add("desativado");
}
export default MainContent;
