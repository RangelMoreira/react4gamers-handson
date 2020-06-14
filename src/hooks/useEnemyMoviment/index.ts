import useInterval from '@use-it/interval';
import React,{useState} from 'react';
import { EDirection, EWalker } from '../../settings/constants';
import { handleNextPosition, checkValidMoviment } from '../../contexts/canvas/helpers';
import {CanvasContext} from '../../contexts/canvas';

function useEnenmyMoviment(initialPosition){
  const canvasContext = React.useContext(CanvasContext);

  const [positionState,updatePositionState] = useState(initialPosition);

  const [direction,updateDirectionState] = useState(EDirection.RIGHT);

  useInterval(function move(){

    const random = Math.floor(Math.random()*4);
    const directionArray = Object.values(EDirection);
    const randomDirection = directionArray[random];

   const moviment= canvasContext.updateCanvas(randomDirection,positionState,EWalker.ENEMY);
   
    
    
    if (moviment.nextMove.valid){
       updateDirectionState(randomDirection);
       updatePositionState(moviment.nextPosition);

    }
    
    if (moviment.nextMove.dead){
      alert('você morreu');
      window.location.reload();
    }

  }, 2000);

  const returnValue ={
    position: positionState,
    direction: direction
  }

  return returnValue;
}
export default useEnenmyMoviment;
