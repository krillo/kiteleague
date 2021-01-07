import React, {Component} from 'react';
import './NavFooter.scss';
import { Link } from "react-router-dom";
import {ReactComponent as HomeSVG} from '../../design-tokens/icons/home.svg';
import {ReactComponent as PinSVG} from '../../design-tokens/icons/pin.svg';
import {ReactComponent as SettingsSVG} from '../../design-tokens/icons/settings.svg';
import { getPath } from "../../settingsFile";

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
                <Link to={getPath.home} className={'home'}><HomeSVG /></Link>
                <Link to={getPath.summary} className={'sites'}><PinSVG /></Link>
                <Link to={getPath.settings} className={'settings'}><SettingsSVG /></Link>
            </div>
        )
    }
}
export default NavFooter;
