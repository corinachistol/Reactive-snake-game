import { Snake } from "../snake/ui";
import { Apple } from "../apple/ui";

import{useState,useEffect,useReducer} from 'react';

const reduceGameState = (state, action) => {
    // console.log(state) // state pastreaza toata structura de date "game"

    // console.log(action)
    //1.find the snake & snake index
    let snakeIdx = state.children
        .findIndex( item => item.name == 'snake')
    // console.log(snakeIdx)

    //1.b. updte the snake head direction
    if(action.direction) {
        state.children[snakeIdx].children[0].dir = action.direction
    }

    //2. compute the values
    state.children[snakeIdx].children = state.children
        .find( item => {
            // console.log(item)
            return item.name == 'snake'})
        .children
        .reverse()
        .map( (item, idx, arr) => {
            console.log(item)
            console.log(arr[idx+1])
            if(item.dir) {
                // debugger
                 if (item.name !== 'head'){
                    item.dir = arr[idx+1].dir
                    item.coord = arr[idx+1].coord
                } else{
                    if (item.dir == 'up'){
                        item.coord.top--
                    }else if (item.dir == 'down'){
                        item.coord.top++
                    }else if (item.dir == 'right'){
                        item.coord.left++
                    }else if (item.dir == 'left'){
                        item.coord.left--
                    }
                
                }
            }
            return item
        }).reverse()
    
    //3. clone the previous gameDAta
    let newState = structuredClone(state)

    //4. set the copy as the new state
    return newState

}

//game component
export const Game = ({ data, data: {children} }) => {
   
    // let [gameData,setGameData] = useState(data)

    let [state,dispatch] = useReducer(reduceGameState, data )


    useEffect(()=>{
        setTimeout(()=>{
          dispatch({ direction: 
            Math.random < 0.1 ? ["up", "right", "down", "left"][parseInt(Math.random()*3.9)] 
            : null })
        },1000)
    })



    return (
        <div className="game">
           {
            state.children.map((childData,idx)=>{
                // console.log(childData)
                switch(childData.name){
                    case "snake":
                        return <Snake
                                key={`k-${idx}`}
                                data={childData}
                    />     
                    
                    case "apple": 
                        return <Apple
                                key={`k-${idx}`}
                                {...childData}
                    />
                    

                }
                
            })
           }
        </div>
    )
}




// const game = {

//     score:0,
//     state: "started",
  
//     children: [
//       {
//         name: "snake",
//         children: [
//             { name: "head", dir: "up", coord : { top:100, left:200} },
//             { name: "body", dir: "upDown", coord : { top:150, left:200} },
//             { name: "tail", dir: "down", coord : { top:200, left:200} },
//         ]
//       },
  
//       {
//         name: "apple",
//         coord: {top:50, left:50}
//       },
//     ]
  
//   }