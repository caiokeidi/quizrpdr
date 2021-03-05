import React from 'react';
import './SideBar.css'

function MenuSeasons(props){
    function btmSelecionado(btm){
        props.categoriaSelecionada(btm.target.id)
    }

    return(

        <div className='MenuSeasons'>
            <ul>

            <li><button onClick={btmSelecionado} id='0' className='menuSeasons_button'>SEASON 1 - 4</button></li>
            <li><button className='menuSeasons_button'>SEASON 5 - 8</button></li>
            <li><button className='menuSeasons_button'>SEASON 9 - 12</button></li>
            <li><button className='menuSeasons_button'>ALL STARS</button></li>
            <li><button className='menuSeasons_button'>ALL SEASONS</button></li>

            </ul>
        </div>
        
    );
}

export default MenuSeasons