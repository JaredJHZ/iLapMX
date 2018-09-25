import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';
const navigationItem = (props) => {
    let navItems  = [];
    props.navItems
                        .map(
                            (key) => navItems.push(<NavigationItem key={key.title} title={key.title}></NavigationItem>)
                        )
    return (
        <ul className={classes.NavigationItems}>
            {navItems}
        </ul>

    )
}

export default navigationItem;