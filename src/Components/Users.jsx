import React from "react"

export const User = (props) => {

    return <div className="block">
        <div>{props.name}</div>
        <div>{props.age}</div>
    </div>

}