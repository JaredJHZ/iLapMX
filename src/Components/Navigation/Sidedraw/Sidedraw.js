import React from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './Sidedraw.css';
import Aux from '../../../HOC/aux';
import NavigationItems from '../Navigation/NavigationItems';
const sideDraw = (props) => {
    let attachedClasses = [classes.Sidedraw, classes.Close];
        if (props.show) {
            attachedClasses = [classes.Sidedraw, classes.Open]
        }
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.opened} ></Backdrop>
            <div className={attachedClasses.join(' ')}>
                <h3 className={classes.Center}>ilapMX</h3>
                <nav >
                     <NavigationItems logout={props.logout} isLogged={props.isLogged} user={props.user} navItems={props.navItems} login={props.login} />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDraw;