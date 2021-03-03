import React from 'react';
import './MainContent.css';

function MainContent(){
    var img_pergunta = require('../../assets/imgs/geral/sasha.jpeg')

    return(
        <section className='MainContent'>
            <div className='MainBox'>
                <div className='header_perguntas'>
                    <h2>PERGUNTA 1</h2>
                </div>
                <div className='img_box'>
                    <img src={img_pergunta.default} 
                        alt='Foto da Sasha Velour tirando as pétalas da peruca'
                        className='img_pergunta'
                        />
                </div>
                <div className='div_pergunta'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Ipsam recusandae modi facere iusto, consequuntur illo 
                        enim voluptas expedita doloribus?</p>
                </div>
                <div className='div_respostas'>
                    <div className='div_respostas_linha'>
                        <div onClick={resposta_escolhida} className='btm_respostas' id='1'></div>
                        <div onClick={resposta_escolhida} className='btm_respostas' id='2'></div>
                    </div>
                    <div className='div_respostas_linha'>
                        <div onClick={resposta_escolhida} className='btm_respostas' id='1'></div>
                        <div onClick={resposta_escolhida} className='btm_respostas' id='2'></div>
                    </div>
                </div>
            </div>
        
        </section>
        
    )
}

function resposta_escolhida(btm){
    console.log(btm.id)
}

export default MainContent;