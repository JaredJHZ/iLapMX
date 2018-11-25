import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';
const navigationItem = (props) => {
    let navItems  = [];
    props.navItems
                .map(
                        (key) => navItems.push(<NavigationItem key={key.title} title={key.title}></NavigationItem>)
                    )
    let Contact = <NavigationItem name="Contact" router link="./contact" />
    let Register = null;
    let user = null;
    let userNav = null;
    let cerrar = null;
    if(!props.isLogged) {
        userNav = <NavigationItem key="login" title='Login' login={props.login}></NavigationItem>;
        Register = <NavigationItem name="Register" router link="./register" />
       
    }else {
        if (typeof props.user === 'string') {
            user = JSON.parse(props.user)
        } else {
            user = props.user;
        }
        userNav = <NavigationItem logout={props.logout} key='usuario' title={user.user}></NavigationItem>;
        cerrar = <NavigationItem close logout={props.logout} title="Logout" > </NavigationItem>;
    }
    return (
        <ul className={classes.NavigationItems}>
            {navItems}
            {userNav}
            {Contact}
            {Register}
            {cerrar}
        </ul>

    )
}

export default navigationItem;