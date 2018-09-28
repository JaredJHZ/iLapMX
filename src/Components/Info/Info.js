import React from 'react';
import classes from './Info.css';
import img1 from '../../assets/img/1.png';
const info = (props) => {
    return (
        <div className={classes.Info}>
            <section className={classes.Right}>
            <div className={classes.Header}>
                <h1>iLAPMX</h1>
                <div className={classes.img}>      
                  <img className={[classes.i1]} src={img1} alt = '1' />
                </div>
            </div>
            <p>
            Es una iniciativa para la creación de hardware Mexicano que va a ayudar a
            generar competencia al regionalizar los precios lo más que se pueda , siempre
            pensando en la calidad de nuestro producto final
            </p>
            <p>
                Nuestra empresa está pensada para ser una ayuda para todos los sectores económicos 
                ya que al mantener precios justos , proyectamos ganar un gran porcentaje de mercado.
            </p>
            <div className={classes.Mision}>
                 <h1 >Misión</h1>
                 <p>{props.mision}</p>
            </div>
            <div className={classes.Vision}>
                <h1>Visión</h1>
                <p>{props.vision}</p>
            </div>
          
            </section>
        </div>
       
    
    );
}

export default info;