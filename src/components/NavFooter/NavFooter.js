import React, {Component} from 'react';
import './NavFooter.scss';
import { Link } from "react-router-dom";
import { getIcon } from "../../utils/utils";
import {ReactComponent as HomeSVG} from '../../design-tokens/icons/home.svg';
import {ReactComponent as PinSVG} from '../../design-tokens/icons/pin.svg';
import {ReactComponent as SettingsSVG} from '../../design-tokens/icons/settings.svg';

class NavFooter extends Component {
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
            <div className="nav-footer">
                <Link to="/" className={'home'}><HomeSVG /></Link>
                <Link to="/summary" className={'sites'}><PinSVG /></Link>
                <Link to="/settings" className={'settings'}><SettingsSVG /></Link>
            </div>
        )
    }
}
export default NavFooter;
