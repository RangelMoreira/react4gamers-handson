 import React from 'react';

import {TITLE_SIZE, HEAD_OFFSET, EDirection} from '../../settings/constants';

import './index.css';
import useEnenmyMoviment from '../../hooks/useEnemyMoviment';

const moviment ={
  position: {x:5, y:5},
  direction: EDirection.RIGHT,
};

//interface para permitir o acesso às opção do props adicionando ponto
interface IProps{
  initialPosition: {x: number; y:number}
};

const MiniDemon =(props: IProps)=>{
    
    const moviment = useEnenmyMoviment(props.initialPosition)
    return(
       <div
            style={{
              position: "absolute",
              top: TITLE_SIZE*moviment.position.y - HEAD_OFFSET,
              left: TITLE_SIZE*moviment.position.x,
              width:TITLE_SIZE,
              height:100,
              backgroundImage: "url(./assets/MINI-DEMON.png)",
              backgroundRepeat: 'no-repeat',
              animation: 'mini-demon-animation 1s steps(4) infinite',
              backgroundPosition: `0px -${TITLE_SIZE-HEAD_OFFSET}px`,
              transform: `scalex(${moviment.direction === EDirection.RIGHT ? 1 : -1})`,
            }}
       />

       
        
    );
}

export default MiniDemon;