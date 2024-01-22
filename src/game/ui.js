import { Snake } from "../snake/ui";
import { Apple } from "../apple/ui";
import{useState,useEffect} from 'react';

//game component
export const Game = ({ data, data: {children} }) => {
   
    let [gameData,setGameData] = useState(data)

    useEffect(()=>{
        setTimeout(()=>{
            //1. clone the previous gameData
            let newGameData = structuredClone(gameData)
            //2. make changes in the copy
            newGameData.children[0].children[0].coord.top -=1
            //3. set the copy as the new state
            setGameData(newGameData)
        },50)
    })



    return (
        <div className="game">
           {
            gameData.children.map((childData,idx)=>{
                console.log(childData)
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