import React from 'react';
import classes from './NavigationItem.css';
import { Link } from 'react-scroll'
import {NavLink} from 'react-router-dom';
const navigationItem = (props) => {
    let nav;
    
    if (props.title === 'Login') {
        nav =  <li className={classes.NavigationItem} onClick={props.login}>{props.title}</li>
    } else if (props.router) {
        let nav = <NavLink className={classes.NavigationItem} to={props.link}> {props.name} </NavLink>
        return nav;
    } else if (props.close) {
        nav = <li  className={classes.custom} onClick={props.logout}>{props.title}</li>
    } else {
        nav = <Link className={classes.NavigationItem} to={props.title}
        smooth
        activeClass="selected"
        >{props.title}</Link>
    }

    return nav;
}


export default navigationItem;