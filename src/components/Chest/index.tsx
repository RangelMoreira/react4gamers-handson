import React from 'react';

import {TITLE_SIZE} from '../../settings/constants';

import './index.css';
import { ChestsContext } from '../Chests';

// const moviment ={
//   position: {x: 5, y:5},
//   direction: EDirection.RIGHT
// }

interface IProps{
  initialPosition: {x: number; y:number}
}

const Chest =(props: IProps)=>{
    const chestContext = React.useContext(ChestsContext); 

    console.log('baús abertos', chestContext.openedChests.total);
    console.log('posições dos baús', chestContext.openedChests.positions);

   

    const shouldAnimate = chestContext.openedChests.positions.find((position)=>{
        const match = props.initialPosition.y === position.y && props.initialPosition.x === position.x;

        return match;
    })

   

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
              // backgroundPosition: '0px 0px',
              animation: shouldAnimate && 'chest-animation 1s steps(2) forwards '
            }}
       />

       
        
    );
}

export default Chest;