import React from 'react';

const input = (props) => {
    return (
        <input onChange={(event) => props.change(event)} value={props.value} {...props.elementConfig}  />
    )
}


export default input;