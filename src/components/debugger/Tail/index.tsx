import React from 'react';
import { TITLE_SIZE } from '../../../settings/constants';

interface IProps{
  position:{x: number, y: number};
  text: number;
}

function Tile(props: IProps){
  function getTileColor(){
    switch (props.text){
      case 0:
        return 'yellow';
      case 1:
        return 'red';
      
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
      
    }}>

      {props.text}
    </div>
  );
}

export default Tile;