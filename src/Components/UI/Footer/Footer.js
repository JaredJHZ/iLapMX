import React from 'react';
import classes from './Footer.css';
const footer = (props) => (
    <div className={classes.Footer}>
        {props.children}
    </div>
)

export default footer;