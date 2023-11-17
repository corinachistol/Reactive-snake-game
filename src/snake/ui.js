
const Component = ({name}) => {

    return (
        <div className={name}></div>
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


const SnakeHead = withCoordinate(Component)
const SnakeTail = withCoordinate(Component)
// const SnakeBody = withCoordinate(Component)


export {SnakeHead,SnakeTail}


