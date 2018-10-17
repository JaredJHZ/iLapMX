import React from 'react';
import classes from './Software.css';
import PreInstalled from './PreInstalled';
import logo from '../../assets/img/elogo.png';
import { Parallax } from 'react-parallax';
import background from '../../assets/img/linux.png';
const software = (props) => {
    const apps = props.apps.map(
        (app) => <PreInstalled key={app} software={app} />
    )
    return (
        <Parallax
        blur={10}
        bgImage={background}
        bgImageAlt="the cat"
        strength={200}
        >
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
        </Parallax>
    )
}

export default software;