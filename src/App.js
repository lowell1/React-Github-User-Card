import React from "react";
import axios from "axios";
import UserCard from "./components/UserCard";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {userInfo: {}, followers: []};
    }
    
    componentDidMount() {
        axios.get("https://api.github.com/users/lowell1")
            .then(respo => {
                this.setState({...this.state, userInfo: respo.data});
            })
            .catch(err => {
                console.log(err);
            });
            
        axios.get("https://api.github.com/users/lowell1/followers")
            .then(respo => {
                this.setState({...this.state, followers: respo.data});
            })
            .catch(err => {
                console.log(err);
            });
    }
    
    render() {
        return (
            <><UserCard userInfo={this.state.userInfo} followers={this.state.followers}/></>
        )
    }
}