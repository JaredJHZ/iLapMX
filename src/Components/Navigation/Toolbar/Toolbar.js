import React from 'react';
import classes from './Toolbar.css';
import NavigationItems from '../Navigation/NavigationItems';

const toolbar = (props) => {
    return (
    <div className={classes.Toolbar}>
        <div>
            icon
        </div>
        <div>
            iLapMX
        </div>
        <nav className={classes.Nav}>
            <NavigationItems navItems={props.navItems} />
        </nav>
    </div>
    )
}

export default toolbar;