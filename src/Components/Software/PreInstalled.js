import React from 'react';
import classes from './Software.css';
const preInstalled = (props) => (
    <li className={classes.PreInstalled}>{props.software}</li>
);

export default preInstalled;