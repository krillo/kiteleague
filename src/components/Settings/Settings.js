import React, {Component} from 'react';
import './Settings.scss';
import { Link } from "react-router-dom";

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state =  {
        }
    }


    render() {
        return (
            <div className="settings">
                Settings
            </div>
        )
    }
}

export default Settings;
