import React, {Component} from 'react';
import './Nav.scss';
import { Link } from "react-router-dom";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state =  {
        }
    }

    openNav = () => {
        document.getElementById("mySidenav").style.width = '100%';
    }
    closeNav = () => {
        document.getElementById("mySidenav").style.width = '0';
    }

    render() {
        return (
            <div className="sidenav-container">
                <div className={'hamburger'} onClick={this.openNav } >&#9776;</div>
                <div id="mySidenav" className="sidenav">
                    <div className="close-button" onClick={() => this.closeNav() } >&times;</div>
                    <Link to="/" onClick={() => this.closeNav() } >Home</Link>
                    <Link to={{pathname: "/detail", search: "spotid=1"}} onClick={() => this.closeNav() }>Detail</Link>
                    <Link to="/summary" onClick={() => this.closeNav() }>Summary</Link>
                    <Link to="/settings" onClick={() => this.closeNav() }>Settings</Link>
                </div>
            </div>
        )
    }
}

export default Nav;
