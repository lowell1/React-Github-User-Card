import React from "react";
import axios from "axios";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {userInfo: {}, followers: []}
    }
    
    componentDidMount() {
        axios.get("https://api.github.com/users/lowell1")
            .then(respo => {
                console.log(respo);
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    render() {
        return (
            <></>
        )
    }
}