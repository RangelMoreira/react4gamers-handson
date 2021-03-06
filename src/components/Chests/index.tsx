import React from 'react';

interface IProps{
  children: React.ReactNode;
}
export const ChestsContext = React.createContext({
  totalChests:3,

  openedChests:{
    total:0,
    positions:[]
  },
  updateOpenedChests:(position) =>null
});

function ChestsProvider(props: IProps){
  const [chestState, updateChestState] = React.useState({
      totalChests:3,
      openedChests:{
        total:0,
        positions:[]
      },

      updateOpenedChests: (position) =>{
        // console.log('chests');
        //códifo para abrir o baú quando passar em cima
        updateChestState((prevState)=>{
          return{
            totalChests: prevState.totalChests,
            openedChests:{
              total:prevState.openedChests.total +1,
              positions:prevState.openedChests.positions.concat(position),
            },

            updateOpenedChests: prevState.updateOpenedChests,
          }
        })

      }
  });
  return(

    <ChestsContext.Provider value={chestState}>{props.children}</ChestsContext.Provider>
  );
}

export default ChestsProvider;