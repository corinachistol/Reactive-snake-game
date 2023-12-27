import { Component, withCoordinate } from "../common/common";
import './style.scss'

const Apple = withCoordinate(Component)


export const AppleComponent = ({data}) => {
   console.log(data)
    return (
        <Component name="apple">
            <Apple coord={data.coord} />
        </Component>
            
    
    )

}

