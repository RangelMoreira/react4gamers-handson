import React from 'react';

import {TITLE_SIZE, HEAD_OFFSET} from '../../settings/constants';

import './index.css';


const MiniDemon =()=>{
    return(
       <div
            style={{
              position: "absolute",
              bottom: TITLE_SIZE*4,
              left: TITLE_SIZE*5,
              width:TITLE_SIZE,
              height:100,
              backgroundImage: "url(./assets/MINI-DEMON.png)",
              backgroundRepeat: 'no-repeat',
              animation: 'mini-demon-animation 1s steps(4) infinite',
              backgroundPosition: `0px -${TITLE_SIZE-HEAD_OFFSET}px`
            }}
       />

       
        
    );
}

export default MiniDemon;