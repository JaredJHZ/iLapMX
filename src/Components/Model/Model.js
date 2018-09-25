import React from 'react';
import classes from './Model.css';
const Model = (props) => {

    const specifications = Object.keys(props.specifications)
                                .map(
                                    (spec,index) => <li key={index} > {spec} : {props.specifications[spec]}</li> 
                                )
                        
    return (
    <div onClick={props.toogle} className={classes.Model}>
        <h3>{props.name}</h3>
        <h3>Spec</h3>
        <ul>
            {specifications}
        </ul>
        <h2>{props.price}</h2>   
    </div>);
}

export default Model;