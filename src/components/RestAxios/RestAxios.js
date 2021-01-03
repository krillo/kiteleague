import React from 'react';
import axios from "axios";
import ReactDOM from "react-dom";
import './Asynch.scss';
import {getSpotIdFromUrl} from "../../utils/utils";
import { clearLocalStorage, getWindData } from "../../utils/weatherData";

class RestAxios extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.getUsers();

        //clearLocalStorage();
        //let data = getWindData(1);
    }

    getUsers = () => {
        axios
            .get("https://reqres.in/api/users?page=1")
            .then(data => this.setState({ users: data.data.data }))
            .catch(err => {
                console.log(err);
                return null;
            });
    };


    getUsers2 = async () => {
        let res = await axios.get("https://reqres.in/api/users?page=1");
        let { data } = res.data;
        this.setState({ users: data });
    };



    render() {
        return (
            <div>
                {this.state.users.length === 0 ? (
                    <div>Loading...
                        <div>mdmdm</div>
                    </div>
                ) : (
                    this.state.users.map((e, i) => {
                        return <div key={i}>{e.first_name}</div>;
                    })
                )}
            </div>
        );
    }
}
export default RestAxios;
