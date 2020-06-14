import { EDirection, EWalker } from "../../settings/constants";
import React from "react";

export function handleNextPosition(direction, position){
  switch(direction){

    case EDirection.LEFT:
      return {x: position.x-1, y:position.y};

    case EDirection.RIGHT:
      return {x:position.x+1, y:position.y};
    
    case EDirection.DOWN:
      return {x:position.x, y:position.y+1};
    
    case EDirection.UP:
      return {x:position.x, y:position.y-1};

  }
}


export enum ECanvas{
  FLOOR = 0,
  WALL = 1,
  DOOR =2,
  TRAP = 3,
  MINI_DEMON = 4,
  DEMON = 5,
  CHEST =6,
  HERO = 7

};

const FL = ECanvas.FLOOR;
const WL = ECanvas.WALL;
const DR = ECanvas.DOOR;
const TR = ECanvas.TRAP;
const MD = ECanvas.MINI_DEMON;
const DE = ECanvas.DEMON;
const CH = ECanvas.CHEST; 
const HE = ECanvas.HERO;



/**
 * TODO VALOR 1 É PAREDE
 */
export const canvas=[
  [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,DR,DR,WL,WL,WL,WL,WL],
  [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,DR,DR,WL,WL,WL,WL,WL],
  [WL,FL,FL,WL,FL,FL,FL,FL,WL,FL,FL,FL,FL,FL,FL,FL,WL,FL,FL,WL],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,DE,FL,FL,FL,WL],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,FL,FL,FL,FL,FL,FL,FL,CH,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,FL,FL,FL,FL,FL,DE,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,FL,DE,FL,FL,FL,FL,FL,FL,FL,FL,FL,MD,FL,FL,FL,FL,FL,FL,WL],
  [WL,FL,CH,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,FL,FL,FL,FL,MD,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,TR,FL,FL,FL,FL,TR,CH,FL,WL],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,HE,WL,FL,TR,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL],
];

//verificando se o movimento é válido
export function checkValidMoviment( nextPosition, walker){
  const canvasValue = canvas[nextPosition.y][nextPosition.x] ;

  const result = walker === EWalker.HERO 
      ? getHeroValidMovies(canvasValue) 
      : getEnemyValidMoves(canvasValue);
  
  return result;
  
  

   function getHeroValidMovies(canvasValue){
      return{
        valid: canvasValue === ECanvas.FLOOR || canvasValue === ECanvas.CHEST || canvasValue === ECanvas.TRAP || canvasValue === ECanvas.MINI_DEMON || canvasValue === ECanvas.DEMON,
        dead: canvasValue === ECanvas.TRAP || canvasValue === ECanvas.MINI_DEMON || canvasValue === ECanvas.DEMON,
        chest: canvasValue === ECanvas.CHEST,
        door: canvasValue === ECanvas.DOOR, 
      }

    
   }

   function getEnemyValidMoves(canvasValue){
    return{
      valid: canvasValue === ECanvas.FLOOR || canvasValue === ECanvas.HERO,
      dead: canvasValue === ECanvas.HERO,
      chest: false,
      door: false, 
    }
   }

}