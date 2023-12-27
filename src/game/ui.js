import { Snake } from "../snake/ui";

//game component
export const Game = ({ data: {children} }) => {

    return (
        <div className="game">
           {
            children.map((childData,idx)=>{
                
                switch(childData.name){
                    case "snake":
                        return <Snake
                                key={`k-${idx}`}
                                data={childData}
                            />     
                    
                    case "apple": 
                    //compone ....
                    return null

                }
                
            })
           }
        </div>
    )
}