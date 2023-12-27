import { Snake } from "../snake/ui";
import { Apple, AppleComponent } from "../apple/ui";

//game component
export const Game = ({ data: {children} }) => {
    console.log(children)
    return (
        <div className="game">
           {
            children.map((childData,idx)=>{
                console.log(childData)
                switch(childData.name){
                    case "snake":
                        return <Snake
                                key={`k-${idx}`}
                                data={childData}
                            />     
                    
                    case "apple": 
                        return <AppleComponent
                                key={`k-${idx}`}
                                data={childData}
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