import React from 'react';
import classes from './Toolbar.css';
import NavigationItems from '../Navigation/NavigationItems';
import Logo from '../../Logo/Logo';
const toolbar = (props) => {
    return (
    <div className={classes.Toolbar}>
        <Logo size='s' />
        <div>
            <h1>iLapMX</h1>
        </div>
        <nav className={classes.Nav}>
            <NavigationItems navItems={props.navItems} />
        </nav>
    </div>
    )
}

export default toolbar;