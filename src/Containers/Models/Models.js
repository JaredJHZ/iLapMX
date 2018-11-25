import React,{Component} from 'react';
import classes from './Models.css';
import Model from '../../Components/Model/Model';
import { Parallax } from 'react-parallax';
import background from '../../assets/img/laptop.jpeg';
class Models extends Component {
    state = {
        models: [
            {
                name:'Razerx',
                specifications: 
                    {
                        CPU:'Intel i5',
                        RAM: 'Adata ddr4 8gb 2400 mhz',
                        DISPLAY:'1920x1080px Amoled'
                    }
                ,
                price:'3000$'
            },
            {
                name:'Razor',
                specifications: 
                    {
                        CPU:'Intel i7',
                        RAM: 'Adata ddr4 16gb 2400 mhz',
                        DISPLAY:'1920x1080px Amoled'
                    }
                ,
                price:'7000$'
            }
        ]
    }
    render(){
    const modelsA = this.state.models
                        .map(
                            (model, index) => <Model toogle={() => this.props.toogle(model, index)} key={index} name={model.name} specifications ={model.specifications}
                            price={model.price}/>
                        )
        return (
            <div className={classes.Models}>    
                <h1 className={classes.Important}>Nuestros modelos</h1>
                <h3 className={classes.Important}>Da click para reservar alguno!</h3>
                <div className={classes.Cards}>
                        {modelsA}
                </div>
            </div>
        );
    }
}

export default Models;