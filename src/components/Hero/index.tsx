import useEventListener from '@use-it/event-listener';
import React,{useState} from 'react';

import {TITLE_SIZE, HEAD_OFFSET} from '../../settings/constants';

import './index.css';

const initialPosition={
  x:10,
  y:10,
  
}


const Hero =()=>{
 
  const [positionState,updatePositionState] = useState(initialPosition);

  const [direction,updateDirectionState] = useState('RIGHT');
  
  useEventListener('keydown', (event: React.KeyboardEvent<HTMLDivElement>)=> {
    // debugger;
   if (event.key === 'ArrowLeft'){
    
      updatePositionState({x: positionState.x-1, y:positionState.y});
      updateDirectionState('LEFT');

   }else if (event.key === 'ArrowRight'){
     
      updatePositionState({x: positionState.x+1, y:positionState.y});
      updateDirectionState('RIGHT');

   }else if (event.key ==='ArrowDown'){
     
      updatePositionState({x: positionState.x, y:positionState.y-1});
   } else if (event.key ==='ArrowUp'){
   
    updatePositionState({x: positionState.x, y:positionState.y+1});
  } 
  });//usando as teclas

  // setTimeout(() => {
  //   const newPosition = {x:16, y:15};
  //   updatePositionState(newPosition);
  // }, 2000)//executa a função após 2 segundos
 
  return(
       <div
            style={{
              position: "absolute",
              bottom: TITLE_SIZE*positionState.y,
              left: TITLE_SIZE*positionState.x,
              width:TITLE_SIZE,
              height:TITLE_SIZE+HEAD_OFFSET,
              backgroundImage: "url(./assets/HERO.png)",
              backgroundRepeat: 'no-repeat',
              animation: 'hero-animation 1s steps(4) infinite',
              backgroundPosition: `0px -${TITLE_SIZE-HEAD_OFFSET}px`,
              transform: `scalex(${direction === 'RIGHT' ? 1 : -1})`//faz o heri olhar para o outro lado
            }}
       />

       
        
    );
}

export default Hero;