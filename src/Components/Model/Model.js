import React from 'react';
import classes from './Model.css';
const Model = (props) => {

    const specifications = Object.keys(props.specifications)
                                .map(
                                    (spec,index) => <li key={index} > {spec} : {props.specifications[spec]}</li> 
                                )
                        
    return (
    <div onClick={props.toogle} className={classes.Model}>
        <div className={classes.Title}>
            <h3>{props.name}</h3>
        </div>
        <ul>
            {specifications}
        </ul>
        <h3> {props.price} </h3>   
    </div>);
}

export default Model;