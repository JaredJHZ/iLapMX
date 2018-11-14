import React, {Component} from 'react';
import Home from '../../Containers/Home';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import Footer from '../../Components/UI/Footer/Footer';
import MenuB from '../UI/MenuB/MenuB';
import Contact from '../Contact/Contact';
import * as Scroll from 'react-scroll';
import {BrowserRouter, Route} from 'react-router-dom';
import Modal from '../../Components/UI/Modal/Modal';

import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions/actions'

import Input from '../Input/Input';
import { throws } from 'assert';

class Layout extends Component {

    state = {
        navItems : [
                {
                    title:'Info'
                },
                {
                    title:'Software'
                },
                {
                    title:'Models'
                },
                {
                    title: 'Comments'
                }
            ],
            showButton:false,
            loginModal: false,
            user : {
                email:'',
                password:''
            }
        }

    shouldComponentUpdate(prev,nextState) {
        
        return true;
    }
    componentDidMount () {
        document.addEventListener('scroll', () => {
            if (window.scrollY < 200) {
                this.hideButtonHandler();
            }
            if (window.scrollY > 50) {
                this.showButtonHandler();
            }
        })
    }

    showButtonHandler = () => {
        const newState = {
            ...this.state, showButton: true
        }
        this.setState(newState);
    }

    hideButtonHandler = () => {
        const newState = {
            ...this.state, showButton: false
        }
        this.setState(newState);
    }

    topHandler = () => {
        Scroll.animateScroll.scrollToTop();
    }

    toogleLoginHandler = () => {
        this.setState((prev) => {
            return {...prev, loginModal: !prev.loginModal}
        });
    }

    emailChangeHandler = (event) => {
        let login = Object.assign({},this.state.user);
        login.email = event.target.value;
        this.setState({
            ...this.state,
            user:login});
    }
    passwordChangeHandler = (event) => {
        let login = Object.assign({},this.state.user);
        login.password = event.target.value;
        this.setState({
            ...this.state,
            user:login});
    }

    render () {
        let login = null;
        if (this.state.loginModal === true ) {
            login = (
            <Modal login={true} clicked={this.toogleLoginHandler} show={this.state.loginModal}>
                    <h1>Login</h1>
                            <form>
                                <input type="text" value={this.state.user.email}  onChange={(e) => this.emailChangeHandler(e)}/>
                                <input type="password" value={this.state.user.password}  onChange={(e) => this.passwordChangeHandler(e)}/>
                            </form>
                             <button onClick={() => this.props.onLogin(this.state.user.email, this.state.user.password)}>Login</button>
                             <button onClick={this.toogleLoginHandler}>Cerrar</button>
            </Modal>);
         }
         let isLogged = null;
         if (this.props.logged) {
             isLogged = <h1>logged</h1>;
         }
        return (
            <BrowserRouter>
                <div>
                {login}
                {isLogged}
                    <MenuB clicked={this.topHandler} show={this.state.showButton} />
                    <header id ="header">
                        <Toolbar isLogged={this.props.logged} user={this.props.user} login={this.toogleLoginHandler} navItems={this.state.navItems} />
                    </header>
                    <div  className={classes.Layout}>
                        <Route component={Contact} exact path='/contact' />
                        <Route component={Home} path="/" exact />
                       
                    </div> 
                    <footer>
                        <Footer>
                            <h5>@JosafhatHZ</h5>
                        </Footer>
                    </footer>
                </div>
                
            </BrowserRouter>
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
        onLogin: (email, password) => dispatch(actionTypes.actionLogin(email, password))
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(Layout);