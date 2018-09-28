import React from 'react';
import classes from './MenuB.css';

const menuB = (props) => {
    let cla;
    if (props.show) {
        cla = classes.Activated;
    }else {
        cla = classes.MenuB;
    }
    return (<button onClick={props.clicked} className={cla}><i className="fas fa-angle-double-up"></i></button>)
}

export default menuB;