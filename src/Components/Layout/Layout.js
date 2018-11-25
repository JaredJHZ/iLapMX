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

import Sidedraw from '../Navigation/Sidedraw/Sidedraw';

import NewUser from '../NewUser/Register';

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
            },
            show: true
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

    showSideHandler = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                show: !prevState.show
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
                                <input className={classes.Input} placeholder="Usuario" type="text" value={this.state.user.email}  onChange={(e) => this.emailChangeHandler(e)}/>
                                <input placeholder="Contraseña" type="password" value={this.state.user.password}  onChange={(e) => this.passwordChangeHandler(e)}/>
                            </form>
                             <button onClick={() => this.props.onLogin(this.state.user.email, this.state.user.password, this.toogleLoginHandler)}>Login</button>
                             <button onClick={this.toogleLoginHandler}>Cerrar</button>
            </Modal>);
         }
        return (
            <BrowserRouter>
                <div>
                {login}
                    <MenuB clicked={this.topHandler} show={this.state.showButton} />
                    <header id ="header">
                        <Toolbar click={this.showSideHandler} logout={this.props.onLogout} isLogged={this.props.logged} user={this.props.user} login={this.toogleLoginHandler} navItems={this.state.navItems} />
                        <Sidedraw click={this.showSideHandler} logout={this.props.onLogout} isLogged={this.props.logged} user={this.props.user} login={this.toogleLoginHandler} navItems={this.state.navItems} show={!this.state.show}  opened={this.showSideHandler}></Sidedraw>
                    </header>
                    <div  className={classes.Layout}>
                        <Route component={Contact} exact path='/contact' />
                        <Route component={NewUser} path="/register" />
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
        onLogin: (email, password, close) => dispatch(actionTypes.actionLogin(email, password, close)),
        onLogout: () => dispatch({type:'ONLOGOUT'})
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(Layout);