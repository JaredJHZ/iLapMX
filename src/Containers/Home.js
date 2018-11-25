//react main library
import React,{Component} from 'react';
//Scroll library

// redux
import {connect} from 'react-redux';

//css
import classes from './Home.css';
// containers and components
import Info from '../Components/Info/Info';
import Models from './Models/Models';
import Modal from '../Components/UI/Modal/Modal'
import Software from '../Components/Software/Software';
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
    selectedIndex: null,
    software: 'Cargado con Elementary OS para brindar una experiencia de usuario fantastica',
    apps : [
        'Firefox',
        'LibreOffice',
        'GIMP',
        'Audacity',
        'Blender',
        'Atom',
        'Eclipse'
    ]
  }

  componentDidMount() {
        this.props.isLogged();
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
                        <div className={classes.buttons}>          
                            <button className={classes.Cancel} onClick={this.toogleModalHandler}>Cancelar</button>
                            <button className={classes.Confirm}>Reservar</button>
                        </div>
                    </div>
                </Modal>
                    );
        }
        let login = null;
      
        return (
            <Aux>
            {content}
            {login}
            <div name="Home" className={classes.Home}>
                <div name="Info">
                    <Info mision={this.state.mision} vision={this.state.vision}/>
                </div>

                <div className={classes.Full} name="Software">
                    <Software description={this.state.software} apps={this.state.apps} />
                </div>

                
                <div className={classes.Full} name="Models">
                    <Models toogle={this.toogleModalHandler} />
                </div>
                
             
                <div className={classes.Full} style={{width:'100%'}} name="Comments">
                    <Comments logged={this.props.logged} />
                </div>

            </div>
            </Aux>
            
        );
    }
}

const mapStateToProps = state => {
    return  {
        logged: state.logged,
        user :state.user
    };
}

const mapDispatchToProps = dispatch => {
    return {
        isLogged: () => dispatch({type:'ISLOGGED'})
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);