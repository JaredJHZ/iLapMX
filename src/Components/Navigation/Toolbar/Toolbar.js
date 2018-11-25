import React from 'react';
import classes from './Toolbar.css';
import NavigationItems from '../Navigation/NavigationItems';
import Logo from '../../Logo/Logo';
import {NavLink} from 'react-router-dom';
const toolbar = (props) => {
    return (
    <div className={classes.Toolbar}>
        <Logo click={props.click} size='s' />
        <div >
            <NavLink className={classes.Link} to='/'>iLapMX</NavLink>
        </div>
        <nav className={classes.Nav}>
            <NavigationItems logout={props.logout} isLogged={props.isLogged} user={props.user} navItems={props.navItems} login={props.login} />
        </nav>
    </div>
    )
}

export default toolbar;