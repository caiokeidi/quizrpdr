import React from 'react';
import './MainContent.css';

function MainContent(){
    return(
        <section className='MainContent'>
            <div className='MainBox'>
                <div className='img_box'></div>
                <div className='div_pergunta'></div>
                <div className='div_respostas'>
                    <div className='div_respostas_linha'>
                        <div onclick={resposta_escolhida} className='btm_respostas' id='1'></div>
                        <div onclick={resposta_escolhida} className='btm_respostas' id='2'></div>
                    </div>
                    <div className='div_respostas_linha'>
                        <div onclick={resposta_escolhida} className='btm_respostas' id='1'></div>
                        <div onclick={resposta_escolhida} className='btm_respostas' id='2'></div>
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