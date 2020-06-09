import React from 'react';

import {TITLE_SIZE, DEMON_TITLE_SIZE, EDirection} from '../../settings/constants';

import './index.css';
import useEnenmyMoviment from '../../hooks/useEnemyMoviment';

// const moviment ={
//   position: {x: 5, y:5},
//   direction: EDirection.RIGHT
// }

interface IProps{
  initialPosition: {x: number; y:number}
}

const Demon =(props:IProps)=>{
    const moviment = useEnenmyMoviment(props.initialPosition);
    return(
       <div
            style={{
              position: "absolute",
              top: TITLE_SIZE*moviment.position.y,
              left: TITLE_SIZE*moviment.position.x,
              width:DEMON_TITLE_SIZE,
              height:DEMON_TITLE_SIZE,
              backgroundImage: "url(./assets/DEMON.png)",
              backgroundRepeat: 'no-repeat',
              animation: 'demon-animation 1s steps(4) infinite',
              transform: `scalex(${moviment.direction === EDirection.RIGHT ? 1 : -1})`,
            }}
       />

       
        
    );
}

export default Demon;