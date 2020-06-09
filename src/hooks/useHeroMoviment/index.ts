import useEventListener from '@use-it/event-listener';
import React,{useState} from 'react';
import { EDirection } from '../../settings/constants';
import { handleNextPosition, checkValidMoviment} from '../../contexts/canvas/helpers';

function useHeroMoviment(initialPosition){
  const [positionState,updatePositionState] = useState(initialPosition);

  const [direction,updateDirectionState] = useState(EDirection.RIGHT);

  useEventListener('keydown', (event: React.KeyboardEvent<HTMLDivElement>)=> {
    const direction = event.key as EDirection;//passa o valor para Edirection

    if(direction.indexOf('Arrow')===-1){
      return;
    }

    
    const nextPosition = handleNextPosition(direction, positionState);
    
    // debugger;
    const isValidMoviment = checkValidMoviment(nextPosition);
    if (isValidMoviment){
      updatePositionState(nextPosition);
       updateDirectionState(direction);

    }


    // debugger;
  });//usando as teclas

  // setTimeout(() => {
  //   const newPosition = {x:16, y:15};
  //   updatePositionState(newPosition);
  // }, 2000)//executa a função após 2 segundos

  const returnValue ={
    position: positionState,
    direction: direction
  }

  return returnValue;


}

export default useHeroMoviment;
