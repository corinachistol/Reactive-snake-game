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
    // debugger
    //2. compute the values
    state.children[snakeIdx].children = state.children
        .find( item => {
            // console.log(item)
            return item.name == 'snake'})
        .children
        .reverse()
        .map((item, idx, arr)=>{
            if(item.dir) {
                if (item.name === 'head'){
                
                } else if (item.name === 'body'){
                    item.dir = arr[idx+1].dir
                    // console.log('before', arr[idx+1])
                    // console.log('after', arr[idx-1])

                    // debugger

                    if (arr[idx+1].name == 'head') {
                        if (arr[idx+1].dir == 'left' && arr[idx-1].dir == 'up' ||
                            arr[idx+1].dir == 'down' && arr[idx-1].dir == 'right') {

                            item.dir = 'up-left'
                        }
                        if (arr[idx+1].dir == 'right' && arr[idx-1].dir == 'up' ||
                            arr[idx+1].dir == 'down' && arr[idx-1].dir == 'left') {

                            item.dir = 'up-right'
                        }
                        if (arr[idx+1].dir == 'left' && arr[idx-1].dir == 'down' ||
                            arr[idx+1].dir == 'up' && arr[idx-1].dir == 'right') {

                            item.dir = 'down-left'
                        }
                        if (arr[idx+1].dir == 'right' && arr[idx-1].dir == 'down' ||
                            arr[idx+1].dir == 'up' && arr[idx-1].dir == 'left') {

                            item.dir = 'down-right'
                        }
                       

                    }
                   
                   
                } else if (item.name === 'tail'){  
                    if(arr[idx+1] && arr[idx+1].dir !== undefined){
                       
                        // item.dir = arr[idx+1].dir
                        if(arr[idx+1].dir.includes('-')){
                            item.dir = arr[idx+1].dir
                                .replace(item.dir, '')
                                .replace('-', '')
    
                        }else{
                            item.dir = arr[idx+1].dir
                        }
                    }
                }
            }
            return item
        })
        .map( (item, idx, arr) => {
            // console.log(item)
            // console.log(arr[idx+1])
            if(item.dir) {
                // debugger
                 if (item.name === 'head'){

                    if (item.dir == 'up'){
                        item.coord.top-=20
                    }else if (item.dir == 'down'){
                        item.coord.top+=20
                    }else if (item.dir == 'right'){
                        item.coord.left+=20
                    }else if (item.dir == 'left'){
                        item.coord.left-=20
                    }
                
                } else if (item.name === 'body'){
                    item.coord = {...arr[idx+1].coord}
                } else if (item.name === 'tail' &&  arr[idx+1]){                   
                    item.coord = {...arr[idx+1].coord}
                }
            }
            return item
        }).reverse()
    
    //3. clone the previous gameDAta
    let newState = structuredClone(state)

    //4. set the copy as the new state
    return newState

}

let oldHandleKeyDOwn = null
let oldTimer = null

//game component
export const Game = ({ data, data: {children} }) => {
   
    // let [gameData,setGameData] = useState(data)

    let [state,dispatch] = useReducer(reduceGameState, data )

    const handleKeyDown = (event) => {
        switch (event.key) {
            case "ArrowRight" : 
                dispatch({direction: 'right' })
            break
            case "ArrowLeft" : 
                dispatch({direction: 'left' })
            break
            case "ArrowUp" : 
                dispatch({direction: 'up' })
            break
            case "ArrowDown" : 
                dispatch({direction: 'down' })
            break
        }
    }


    useEffect(()=>{
        if(oldTimer !== null){
            clearTimeout(oldTimer)
        }
        oldTimer = setTimeout(()=>{
          dispatch({ })
        },1000)
        if(oldHandleKeyDOwn !== null ){
            document.body.removeEventListener('keydown', oldHandleKeyDOwn)    
        }
       
        document.body.addEventListener('keydown', handleKeyDown)
        oldHandleKeyDOwn = handleKeyDown
    })

   
    return (
        <div className="game" >
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