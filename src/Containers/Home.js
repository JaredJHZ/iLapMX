//react main library
import React,{Component} from 'react';
//css
import classes from './Home.css';
// containers and components
import Info from '../Components/Info/Info';
import Models from './Models/Models';
import Modal from '../Components/UI/Modal/Modal'
import Comments from '../Components/Comments/Comments/Comments';
// high order component
import Aux from '../HOC/aux';
//images assets
import image1 from '../assets/img/2.jpg';
import image2 from '../assets/img/3.jpeg';
class Home extends Component {
  state = {
    mision: 'Nuestra misión es ser una impresa innovadora en el sector de la computación en México , ayudando al cliente a crear un equipo de computo con un precio justo y que cumpla con sus necesidades.',
    vision: 'Ser la empresa de ventas de computadoras número 1 en México.',
    show: false,
    selected:null,
    selectedIndex: null
  }
  toogleModalHandler = (product, index) => {
        
        this.setState((prev) => {
            return {...prev, show: !prev.show , selected : product, selectedIndex:index } 
        });
    }
    
    render(){
        let content =  null;
        let images = [image1,image2];
        if(this.state.selected !== null ) {
          content =  (
                <Modal show={this.state.show} toogle={this.toogleModalHandler}>
                <div className={classes.Card} >
                    <h1>{this.state.selected.name}</h1>
                    <div className={classes.Image}><img src={images[this.state.selectedIndex]} alt="img"/></div>
                    <h3>{this.state.selected.price}</h3>
                </div>
                </Modal>
                    );
        }
        return (
            <Aux>
            {content}
            <div className={classes.Home}>
                <h1 className={classes.Title}>iLapMX</h1>
                <Info mision={this.state.mision} vision={this.state.vision}/>
                <Models toogle={this.toogleModalHandler} />
                <Comments/>
            </div>
        
            </Aux>
            
        );
    }
}


export default Home;