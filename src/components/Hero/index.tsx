import useEventListener from '@use-it/event-listener';
import React,{useState} from 'react';

import {TITLE_SIZE, HEAD_OFFSET, EDirection} from '../../settings/constants';

import './index.css';
import useHeroMoviment from '../../hooks/useHeroMoviment';

const initialPosition={
  x:10,
  y:10,
  
}


const Hero =()=>{
 const {direction,position} = useHeroMoviment(initialPosition);

  return(
       <div
            style={{
              position: "absolute",
              bottom: TITLE_SIZE*position.y,
              left: TITLE_SIZE*position.x,
              width:TITLE_SIZE,
              height:TITLE_SIZE+HEAD_OFFSET,
              backgroundImage: "url(./assets/HERO.png)",
              backgroundRepeat: 'no-repeat',
              animation: 'hero-animation 1s steps(4) infinite',
              backgroundPosition: `0px -${TITLE_SIZE-HEAD_OFFSET}px`,
              transform: `scalex(${direction === EDirection.RIGHT ? 1 : -1})`,//faz o heri olhar para o outro lado
              zIndex:1,//define a profundidade como 1, ou seja a cima de tudo
            }}
       />

       
        
    );
}

export default Hero;