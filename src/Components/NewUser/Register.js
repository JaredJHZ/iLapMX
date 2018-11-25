import React, {Component} from 'react';
import classes from './Register.css';
import {axios} from '../../axios';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as actionTypes from '../../store/actions/actions'
class Register extends Component {

    state = {
        newUser: {
            email: '',
            user:'',
            password: ''
        }
    }

    shouldComponentUpdate(prev,nextState) {
        return true;
    }

    changeEmailHandler = (event) => {
        let object = Object.assign({},this.state);
        object.newUser.email = event.target.value;
        this.setState({object});
    }
    changePasswordHandler = (event) => {
        let object = Object.assign({},this.state);
        object.newUser.password = event.target.value;
        this.setState({
            ...this.state,
            object});
    }
    changeUserHandler = (event) => {
        let object = Object.assign({},this.state);
        object.newUser.user = event.target.value;
        this.setState({
            ...this.state,
            object});
    }

    registerNewUser = (e) => {
        e.preventDefault();
        axios.post('/user/new', this.state.newUser)
            .then(
                (data) => {
                    this.props.onLogin(this.state.newUser.email,this.state.newUser.password);
                    this.redirect = <Redirect to="/" />
                }
            ).catch(
               
            )
    }

    redirect = null;

    render() {
       
        
        return (
            <div>
                {this.redirect}
                <div className={classes.Register}>
                    <h3  className={classes.Title} >Registrar usuario </h3>
                    <form className={classes.Form}>
                        <div className={classes.Form}>
                            <label>Email</label>
                            <input 
                            type="email" 
                            value={this.state.newUser.email}
                            onChange={(e) => this.changeEmailHandler(e) } 
                            placeholder="Email"
                            />
                        </div>
                        <div className={classes.Form}>
                            <label>User</label>
                            <input 
                            type="text" 
                            value={this.state.newUser.user}
                            onChange={(e) => this.changeUserHandler(e) } 
                            placeholder="Username"
                            />
                        </div>
                    <div className={classes.Form}>
                            <label>Contraseña</label>
                            <input 
                            type="password" 
                            value={this.state.newUser.password} 
                            onChange={(e) => this.changePasswordHandler(e) } 
                            placeholder="Contraseña"
                            />
                    </div>
                        <button onClick={e => {this.registerNewUser(e)}} className={classes.Button}>
                            Registrarse
                        </button>
                    </form>
                </div>
            </div>
        )
    }
};
const mapStateToProps = state => {
    return  {
        logged: state.logged,
        user :state.user
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (email, password, close) => dispatch(actionTypes.actionLogin(email, password, close)),
        onLogout: () => dispatch({type:'ONLOGOUT'})
    };
}

export default connect( mapStateToProps,mapDispatchToProps)(Register);