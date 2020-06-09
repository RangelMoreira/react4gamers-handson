import useEventListener from '@use-it/event-listener';
import React,{useState} from 'react';

import {TITLE_SIZE, HEAD_OFFSET, EDirection} from '../../settings/constants';

import './index.css';
import useHeroMoviment from '../../hooks/useHeroMoviment';

// const moviment ={
//   position: {x: 5, y:5},
//   direction: EDirection.RIGHT
// }

interface IProps{
  initialPosition: {x: number; y:number}
}

const Hero = (props: IProps)=>{
 const {direction,position} = useHeroMoviment(props.initialPosition);

  return(
       <div
            style={{
              position: "absolute",
              top: TITLE_SIZE*position.y - HEAD_OFFSET,
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