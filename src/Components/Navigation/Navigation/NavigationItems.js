import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';
import {NavLink} from 'react-router-dom';
const navigationItem = (props) => {
    let navItems  = [];
    props.navItems
                .map(
                        (key) => navItems.push(<NavigationItem key={key.title} title={key.title}></NavigationItem>)
                    )
    let user = JSON.parse(props.user);
    if(!props.isLogged) {
        navItems.push(<NavigationItem key="login" title='Login' login={props.login}></NavigationItem>)
    }else {
        navItems.push(<NavigationItem key={user.user} title={user.user}></NavigationItem>);
    }
    return (
        <ul className={classes.NavigationItems}>
            {navItems}
            <NavLink to="/contact" className={classes.Link}>Contact</NavLink>
        </ul>

    )
}

export default navigationItem;