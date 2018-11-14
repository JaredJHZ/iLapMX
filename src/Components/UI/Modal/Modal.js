import React, {Component} from 'react';
import classes from './Modal.css';
import Aux from '../../../HOC/aux';
import Backdrop from '../Backdrop/Backdrop';
class modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    render(){
        let clas = classes.Modal;
        if (this.props.login) {
            clas = classes.Login;
        }
        return (
            <Aux>
            <Backdrop show={this.props.show} clicked={this.props.clicked}/>
            <div className={clas}
                style = {{
                    transform: this.props.show ? 'translateY(0)': 'translateY(-70vh)',
                    opacity: this.props.show ? '1':'0'
                }}
            >
                {this.props.children}
            </div>
            </Aux>
        );
      } 

}   
export default modal;

