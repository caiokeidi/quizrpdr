import React, { useState } from "react";
import "./MainContent.css";

function MainContent(props) {
    const[n, setN] = useState(0)
    var pergunta = props.arrPerguntas[n]

    function proxima(){
        setN(n+1);
    }

    function resposta_escolhida(btm) {
        if(btm.target.id === pergunta.correta.toString()){
            console.log('Certa!')
        }
      }

//   const [pergunta, setPergunta] = useState({
//     n: 0,
//     img: require("../../assets/imgs/geral/sasha.jpeg"),
//     pergunta: "Qual a idade de Sasha Velour?",
//     1: "0 anos",
//     2: "36 anos",
//     3: "28 anos",
//     4: "29 anos",
//     correta: 4,
//   });
  
//   if (props.arrPerguntas[0] !== pergunta && props.arrPerguntas !== "") {
//     console.log("aqui");
//     setPergunta(props.arrPerguntas[0]);
//   }

//   function proxima() {
//     var n = pergunta.n;
//     setPergunta(props.arrPerguntas[n])
//   }

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



export default MainContent;
