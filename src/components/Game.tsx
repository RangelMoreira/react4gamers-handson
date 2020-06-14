import React from 'react';
import CanvasProvider from '../contexts/canvas';
import Board from './board';
import Debugger from './debugger';
import ChestsProvider from './Chests';


function Game(){
  return(
    <CanvasProvider>
      <ChestsProvider>
        {/* <Debugger/> */}
        <Board/>
      </ChestsProvider>
      
    </CanvasProvider>
);


}
export default Game;