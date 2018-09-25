import React from 'react';
import classes from './Info.css';
import img1 from '../../assets/img/1.png';
const info = (props) => {
    return (
        <div className={classes.Info}>
            <section className={classes.Right}>
            <p>
            Es una iniciativa para la creación de hardware Mexicano que va a ayudar a
            generar competencia al regionalizar los precios lo más que se pueda , siempre
            pensando en la calidad de nuestro producto final
            </p>
            <div className='w3-animate-left'>
             <img className={[classes.i1]} src={img1} alt = '1' />
            </div>
            <p>
                Nuestra empresa está pensada para ser una ayuda para todos los sectores económicos 
                ya que al mantener precios justos , proyectamos ganar un gran porcentaje de mercado.
            </p>
            <h3 className={classes.Important}>Misión</h3>
            <h5>{props.mision}</h5>
            <h3 className={classes.Important}>Visión</h3>
            <h5>{props.vision}</h5>
            </section>
        </div>
       
    
    );
}

export default info;