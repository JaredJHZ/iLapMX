import React from 'react';
import classes from './Comment.css';

const comment = (props) => (
    <div className={classes.Comment}>
        <h5>{props.user}</h5>
        <p>{props.comment}</p>
    </div>
)

export default comment;