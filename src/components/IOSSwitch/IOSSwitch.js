import React, {Component} from 'react';
import './IOSSwitch.scss';

class IOSSwitch extends Component {
    constructor(props) {
        super(props);
        this.state =  {
        }
    }


    render() {
        return (
            <div className="ios-switch">
                <div className={'text'}>{ this.props.text }</div>
                <label className="form-switch">
                    <input type="checkbox" checked={this.props.checked} name={this.props.name}/>
                        <i></i>
                </label>
            </div>
        )
    }
}

export default IOSSwitch;
