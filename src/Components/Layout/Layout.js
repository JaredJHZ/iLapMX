import React, {Component} from 'react';
import Home from '../../Containers/Home';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import Footer from '../../Components/UI/Footer/Footer';
import MenuB from '../UI/MenuB/MenuB';
import Contact from '../Contact/Contact';
import * as Scroll from 'react-scroll';
import {BrowserRouter, Route} from 'react-router-dom';

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
            showButton:false
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

    render () {
        return (
            <BrowserRouter>
                <div>
                    <MenuB clicked={this.topHandler} show={this.state.showButton} />
                    <header id ="header">
                        <Toolbar navItems={this.state.navItems} />
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

export default Layout;