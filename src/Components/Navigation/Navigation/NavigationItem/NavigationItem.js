import React from 'react';
import classes from './NavigationItem.css';
import { Link } from 'react-scroll'
const navigationItem = (props) => {
    let nav = <Link className={classes.NavigationItem} to={props.title}
        smooth
        activeClass="selected"
    >{props.title}</Link>

    if (props.title === 'Login') {
        nav =  <li className={classes.custom} onClick={props.login}>{props.title}</li>
    }
    return nav;
}


export default navigationItem;