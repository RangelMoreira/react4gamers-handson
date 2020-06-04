import React from 'react';

import {TITLE_SIZE} from '../../settings/constants';

import './index.css';


const Trap =()=>{
    return(
       <div
            style={{
              position: "absolute",
              bottom: TITLE_SIZE*8,
              left: TITLE_SIZE*3,
              width:TITLE_SIZE,
              height:100,
              backgroundImage: "url(./assets/TRAP.png)",
              backgroundRepeat: 'no-repeat',
              animation: 'trap-animation 1s steps(8) infinite'
            }}
       />

       
        
    );
}

export default Trap;