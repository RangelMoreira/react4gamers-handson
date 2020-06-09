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

const Chest =(props: IProps)=>{
    return(
       <div
            style={{
              position: "absolute",
              top: TITLE_SIZE*props.initialPosition.y,
              left: TITLE_SIZE*props.initialPosition.x,
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