import React from 'react';

import {TITLE_SIZE, HEAD_OFFSET, EDirection} from '../../settings/constants';

import './index.css';
import useEnenmyMoviment from '../../hooks/useEnemyMoviment';


const MiniDemon =()=>{
    const moviment = useEnenmyMoviment({x:10, y:5})
    return(
       <div
            style={{
              position: "absolute",
              bottom: TITLE_SIZE*moviment.position.y,
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