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
        document.getElementById("mySidenav").style.width = '250px';
    }
    closeNav = () => {
        document.getElementById("mySidenav").style.width = '0';
    }

    render() {
        return (
            <div className="sidenav-container">
                <div className={'hamburger'}   onClick={() => this.openNav() }  >&#9776; open</div>
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={() => this.closeNav() } >&times;</a>

                    <Link to="/" onClick={() => this.closeNav() } >Spots</Link>
                    <Link to={{pathname: "/detail", search: "spotid=1"}} onClick={() => this.closeNav() }>Detail</Link>
                    <Link to="/summary" onClick={() => this.closeNav() }>Summary</Link>
                    <Link to="/beep" onClick={() => this.closeNav() }>Beep</Link>
                    <Link to="/RestAxios" onClick={() => this.closeNav() }>RestAxios</Link>
                </div>
            </div>
        )
    }
}

export default Nav;
