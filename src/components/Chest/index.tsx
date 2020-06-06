import React from 'react';

import {TITLE_SIZE} from '../../settings/constants';

import './index.css';


const Chest =()=>{
    return(
       <div
            style={{
              position: "absolute",
              top: TITLE_SIZE*5,
              left: TITLE_SIZE*5,
              width:TITLE_SIZE,
              height:100,
              backgroundImage: "url(./assets/CHEST.png)",
              backgroundRepeat: 'no-repeat',
              animation: 'chest-animation 1s steps(3) infinite'
            }}
       />

       
        
    );
}

export default Chest;