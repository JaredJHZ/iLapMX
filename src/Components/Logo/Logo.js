import React from 'react';
import classes from './Logo.css';
import icon from '../../assets/img/ilapmx.png';
const logo = (props) => {
    
    let sizeClass = '';
    if (props.size === 's') {
        sizeClass = 'S';
    } else if (props.size === 'md') {
        sizeClass = 'M';
    } else {
        sizeClass = 'XL'
    }
    return (<img src={icon} className={classes[sizeClass]} alt=''></img>)
};

export default logo;