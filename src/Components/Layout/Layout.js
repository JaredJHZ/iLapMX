import React, {Component} from 'react';
import Home from '../../Containers/Home';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import Footer from '../../Components/UI/Footer/Footer';
class Layout extends Component {

    state = {
        navItems : [
                {
                    title:'Main'
                },
                {
                    title: 'Home'
                }
            ]
        }
    componentDidMount () {
     
    }

    render () {
        return (
            <div>
                <header id ="header">
                    <Toolbar navItems={this.state.navItems} />
                </header>
                <div  className={classes.Layout}>
                <Home/>
                <aside className={classes.Publicidad}>
                    publicidad
                </aside>
                </div>
                
                <footer>
                    <Footer>
                        <h5>@JosafhatHZ</h5>
                    </Footer>
                </footer>
            </div>
        );
    }
}

export default Layout;