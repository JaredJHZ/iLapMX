import React from 'react';
import classes from './NavigationItem.css';
import { Link } from 'react-scroll'
const navigationItem = (props) => (
    <Link className={classes.NavigationItem} to={props.title}
        smooth
        activeClass="selected"
    >{props.title}</Link>
)


export default navigationItem;