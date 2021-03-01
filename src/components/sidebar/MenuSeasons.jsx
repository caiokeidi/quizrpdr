import React from 'react';
import './SideBar.css'

function MenuSeasons(){
    return(
        <div className='MenuSeasons'>
            <ul>

            <li><button className='menuSeasons_button'>SEASON 1 - 3</button></li>
            <li><button className='menuSeasons_button'>SEASON 4 - 6</button></li>
            <li><button className='menuSeasons_button'>SEASON 7 - 9</button></li>
            <li><button className='menuSeasons_button'>SEASON 10 - 12</button></li>
            <li><button className='menuSeasons_button'>ALL STARS</button></li>
            <li><button className='menuSeasons_button'>ALL SEASONS</button></li>

            </ul>
        </div>
        
    );
}

export default MenuSeasons