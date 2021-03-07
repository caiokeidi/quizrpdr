import React, { useState } from "react";
import "./MainContent.css";

function MainContent(props) {
  const [n, setN] = useState(0);
  var pergunta = props.arrPerguntas[n];
  var acertos = props.acertos;
  var setAcertos = props.setAcertos;

  function proxima() {
    console.log(acertos);
    if (estaPronto()) {
      for (let i = 1; i <= 4; i++) {
        document.getElementById(i).classList = "btm_respostas";
        ativa_btm(i);
      }
      setN(n + 1);
    }
  }

  function resposta_escolhida(btm) {
    if (estaAtivo(btm)) {
      for (let i = 1; i <= 4; i++) {
        desativa_btm(i);
        if (btm.target.id === pergunta.correta.toString()) {
          if (i === pergunta.correta) {
            btm_correto(i);
            setAcertos(acertos + 1);
          } else {
            btm_desativado(i);
          }
        } else {
          if (i === pergunta.correta) {
            btm_corretaDesativado(i);
          } else if (i.toString() === btm.target.id) {
            btm_incorreto(i);
          } else {
            btm_desativado(i);
          }
        }
      }
    }
  }

  return (
    <section className="MainContent">
      <div className="MainBox">
        <div className="header_perguntas">
          <h2>PERGUNTA {pergunta.n.toString()}</h2>
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
            <div
              onClick={resposta_escolhida}
              className="btm_respostas btm_ativo"
              id="1"
              ativo="true"
            >
              {pergunta[1]}
            </div>
            <div
              onClick={resposta_escolhida}
              className="btm_respostas btm_ativo"
              id="2"
              ativo="true"
            >
              {pergunta[2]}
            </div>
          </div>
          <div className="div_respostas_linha">
            <div
              onClick={resposta_escolhida}
              className="btm_respostas btm_ativo"
              id="3"
              ativo="true"
            >
              {pergunta[3]}
            </div>
            <div
              onClick={resposta_escolhida}
              className="btm_respostas btm_ativo"
              id="4"
              ativo="true"
            >
              {pergunta[4]}
            </div>
          </div>
          <div className="div_respostas_linha">
            <div
              onClick={proxima}
              className="btm_respostas btm_ativo btm_proxima"
              id="submit"
            >
              Próxima
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ativa_btm(n) {
  document.getElementById(n).setAttribute("ativo", "true");
}

function desativa_btm(n) {
  document.getElementById(n).setAttribute("ativo", "false");
}

function estaAtivo(btm) {
  return btm.target.getAttribute("ativo") === "true";
}

function estaPronto() {
  return document.getElementById("1").getAttribute("ativo") === "false";
}

function btm_correto(n) {
  document.getElementById(n).classList.add("correto");
}

function btm_incorreto(n) {
  document.getElementById(n).classList.add("incorreto");
}

function btm_corretaDesativado(n) {
  document.getElementById(n).classList.add("corretaDesativado");
}

function btm_desativado(n) {
  document.getElementById(n).classList.add("desativado");
}

export default MainContent;
