import { Children } from "react"

//common components
const Component = ({name, children}) => {

    return (
        <div className={name}>
            {children}
        </div>
    )
}



// decorator 
const withCoordinate = (Component) => {

    return ({top,left, ...props}) => {

        return (
        <div style={{top:`${top}px`, left:`${left}px`,position:'absolute'}}>
            <Component {...props} />
        </div>
        )
    }
}

const withDirection = (Component ) => {
    
    return  ({dir, ...props}) => {

        return (
            <div className={`dir-${dir}`}>
                <Component {...props} />
            </div>
        )
    }
}





//SNAKE PARTS

const SnakeHead = withCoordinate(
    withDirection(
        Component

    )
)

const SnakeTail = withCoordinate(
    withDirection(
        Component
    )
)


const Snake = () => {
    return (
        <Component name ="snake">
            <SnakeHead top={100} left={200} name='head' dir="up" />
            <SnakeTail top={200} left={200} name='tail' dir="up"/>
        </Component>
    )
}






export {Snake}


