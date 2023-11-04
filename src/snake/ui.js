import { useState } from 'react'

import './snake.scss'

//HW2:using props.dir (with destrc & defautl value = 'up)
//      make it so the sneak head renders in either of the next 2 situations
//      <SnakeHead />
//      <SnakeHead dir ="right"/>



const SnakeHead = ({ dir = "up" }) => {
    // let dir = 'up'

    // let [dir,setDir] = useState('up')

    // setTimeout( () => {
    //     console.log("changed direction")
    //     setDir('right')
    // }, 5000)


    return (
        <div className={`snake__head dir-${dir}`}>
            SnakeHead
        </div>
    )
}

export {SnakeHead}