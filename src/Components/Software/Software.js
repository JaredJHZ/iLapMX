import React from 'react';
import classes from './Software.css';
import PreInstalled from './PreInstalled';
import logo from '../../assets/img/elogo.png';
const software = (props) => {
    const apps = props.apps.map(
        (app) => <PreInstalled key={app} software={app} />
    )
    return (
        <div className={classes.Software}>
            <h1>Software libre para una vida libre</h1>
            <p>{props.description}</p>
            <div className={classes.img}>
                <img src={logo} alt='' />
            </div>
            <p>Software pre instalado</p>
            <ul>
                {apps}
            </ul>
        </div>
    )
}

export default software;