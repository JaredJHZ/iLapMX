import React from 'react';
import classes from './Contact.css';
import tux from '../../assets/img/tux.png';
const contact = () => {
    return (
        <div className={classes.Contact}>
            <h1 className={classes.NoMargin}>Para contactar direcamente</h1>
            <img alt="img" className={classes.Img} src={tux}/>
            <h3>Twitter <strong>@JosafhatHZ</strong></h3>
        </div>
    );
}

export default contact;