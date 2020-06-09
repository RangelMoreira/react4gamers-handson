import React from 'react';
import { TITLE_SIZE } from '../../../settings/constants';
import { ECanvas } from '../../../contexts/canvas/helpers';

interface IProps{
  position:{x: number, y: number};
  text: number;
}

function Tile(props: IProps){
  function getTileColor(){
    switch (props.text){
      case ECanvas.FLOOR:
        return 'darkgrey';
      case ECanvas.WALL:
        return 'yellow';
      case ECanvas.DOOR:
        return 'white';
      case ECanvas.TRAP:
        return 'chartreuse';
      case ECanvas.MINI_DEMON:
      case ECanvas.DEMON:
        return 'red';
      case ECanvas.CHEST:
        return 'cyan';
      case ECanvas.HERO:
          return 'magenta';
    
      
    }
  }
  
  const color = getTileColor();
  return(
    <div style={{ 
      position: 'absolute',
      left: TITLE_SIZE * props.position.x,
      top: TITLE_SIZE * props.position.y,
      width:TITLE_SIZE, 
      height:TITLE_SIZE, 
      background: 'none',
      color:  color,
      border:`2px solid ${color}`,
      fontSize: 32,
      zIndex:2
      
    }}>

      {props.text}
    </div>
  );
}

export default Tile;