import React from 'react';

import {TITLE_SIZE} from '../../settings/constants';

import './index.css';

// const moviment ={
//   position: {x: 5, y:5},
//   direction: EDirection.RIGHT
// }

interface IProps{
  initialPosition: {x: number; y:number}
}

const Trap =(props: IProps)=>{
    return(
       <div
            style={{
              position: "absolute",
              top: TITLE_SIZE*props.initialPosition.y,
              left: TITLE_SIZE*props.initialPosition.x,
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