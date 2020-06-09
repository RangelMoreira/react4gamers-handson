import useInterval from '@use-it/interval';
import React,{useState} from 'react';
import { EDirection } from '../../settings/constants';
import { handleNextPosition, checkValidMoviment } from '../../contexts/canvas/helpers';

function useEnenmyMoviment(initialPosition){
  const [positionState,updatePositionState] = useState(initialPosition);

  const [direction,updateDirectionState] = useState(EDirection.RIGHT);

  useInterval(function move(){
    const random = Math.floor(Math.random()*4);
    const directionArray = Object.values(EDirection);
    const randomDirection = directionArray[random];
   
    const nextMoviment = handleNextPosition(randomDirection,positionState);
    const isValidMoviment = checkValidMoviment(nextMoviment);
    
    if (isValidMoviment){
       updateDirectionState(randomDirection);
       updatePositionState(nextMoviment);

    }
    
    

  }, 2000);

  const returnValue ={
    position: positionState,
    direction: direction
  }

  return returnValue;
}
export default useEnenmyMoviment;
