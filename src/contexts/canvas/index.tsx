import React from "react";
import { canvas, ECanvas } from "./helpers";
import { handleNextPosition, checkValidMoviment} from '../../contexts/canvas/helpers';

export const  CanvasContext = React.createContext({
  canvas: [],
  updateCanvas: (direction, currentPosition, wlaker) => null
});

interface IProps{
   children: React.ReactNode;
}

function CanvasProvider(props: IProps){
   const [canvasState,UpdateCanvasState] = React.useState({
     canvas: canvas,
     updateCanvas: (direction, currentPosition, walker) =>{
        const nextPosition = handleNextPosition(direction, currentPosition);
        // debugger;
        const nextMove = checkValidMoviment(nextPosition,walker);
        
        if (nextMove.valid){
          //faz com que seja trabalhado sempre com a informação mais recente
          UpdateCanvasState((prevState)=>{
            const newCanvas =  Object.assign([], prevState.canvas);
            const currentValue = newCanvas[currentPosition.y][currentPosition.x];

            newCanvas[currentPosition.y][currentPosition.x]= ECanvas.FLOOR;
            newCanvas[nextPosition.y][nextPosition.x] = currentValue;

            // console.log(newCanvas);

            return{
              canvas: newCanvas,
              updateCanvas: prevState.updateCanvas,
            }
          });
        }

        return{
          nextPosition,
          nextMove,
        }
      }
   });

   return (
     //canvasContext disponibiliza a informação do maneira global 
   <CanvasContext.Provider value={canvasState}>
      {props.children}
    </CanvasContext.Provider>
   )

}

export default CanvasProvider;