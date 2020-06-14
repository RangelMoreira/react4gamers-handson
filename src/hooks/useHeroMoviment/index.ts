import useEventListener from '@use-it/event-listener';
import React,{useState} from 'react';
import { EDirection, EWalker } from '../../settings/constants';

import {CanvasContext} from '../../contexts/canvas';
import { ChestsContext } from '../../components/Chests';





function useHeroMoviment(initialPosition){

  const chestContext = React.useContext(ChestsContext);
  
  const canvasContext = React.useContext(CanvasContext);

  const [positionState,updatePositionState] = useState(initialPosition);

  const [direction,updateDirectionState] = useState(EDirection.RIGHT);


  useEventListener('keydown', (event: React.KeyboardEvent<HTMLDivElement>)=> {
    const direction = event.key as EDirection;//passa o valor para Edirection

    if(direction.indexOf('Arrow')===-1){
      return;
    }

    const moviment =  canvasContext.updateCanvas(direction, positionState, EWalker.HERO);
    
    if (moviment.nextMove.valid){
      updatePositionState(moviment.nextPosition);
      updateDirectionState(direction);
     

    }

    if(moviment.nextMove.dead){
      setTimeout(() =>{
        alert("você morreu");
      })
      
      window.location.reload();
    }

    if(moviment.nextMove.chest){
      
      chestContext.updateOpenedChests(moviment.nextPosition);
    }

    if(chestContext.totalChests === chestContext.openedChests.total && moviment.nextMove.door){
        alert('você venceu');
        window.location.reload();
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
