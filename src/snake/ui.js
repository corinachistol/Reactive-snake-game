import { useState } from 'react'

import './snake.scss'

const SnakeHead = ({dir = "up", top=0, left=0, dead}) => {
    // let dir = 'up'

    const [_dir,setDir] = useState(dir)
    const [_top,setTop] = useState(top)
    const [_left,setLeft] = useState(left)

    
    return (
        <div 
            className={`snake__head dir-${dir}`}
            style={{ top:`${_top}px`, left:`${_left}px` }}
            >
       
        </div>
    )
}


const SnakeTail = ({dir= "down", bottom=0, left=0 }) => {

    const [_dir,setDir] = useState(dir)
    const [_bottom,setTop] = useState(bottom)
    const [_left,setRight] = useState(left)

    return (
        <div 
            className={`snake__tail dir-${dir}`}
            style={{bottom:`${_bottom}px`, left:`${_left}`}}
            >
            
        </div>

    )
}

export {SnakeHead,SnakeTail}




//HW2:using props.dir (with destrc & defautl value = 'up)
//      make it so the sneak head renders in either of the next 2 situations
//      <SnakeHead />
//      <SnakeHead dir ="right"/>

//o varianta de rezolvare a taskului
// const SnakeHead = (props) => {

//     let [dir,setDir] = useState(props.dir ?? "up")

//     return (
//         <div className={`snake__head dir-${dir}`}>
//             SnakeHead
//         </div>
//     )
// }