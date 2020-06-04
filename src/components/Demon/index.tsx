import React from 'react';

import {TITLE_SIZE, DEMON_TITLE_SIZE} from '../../settings/constants';

import './index.css';


const Demon =()=>{
    return(
       <div
            style={{
              position: "absolute",
              bottom: TITLE_SIZE*10,
              left: TITLE_SIZE*5,
              width:DEMON_TITLE_SIZE,
              height:DEMON_TITLE_SIZE,
              backgroundImage: "url(./assets/DEMON.png)",
              backgroundRepeat: 'no-repeat',
              animation: 'demon-animation 1s steps(4) infinite'
            }}
       />

       
        
    );
}

export default Demon;