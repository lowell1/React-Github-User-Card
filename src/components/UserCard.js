import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class UserCard extends React.Component {
    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        console.log(this.props.followers);
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.userInfo.avatar_url} />
                <Card.Body>
                    <Card.Title>{this.props.userInfo.name}</Card.Title>
                    <Card.Text style={{fontWight: "bold"}}>My followers:</Card.Text>
                    {/* <Card.Text>
                        {
                            this.props.followers.map(val => {
                                return (<p>asdas</p>);
                            })
                        }
                    </Card.Text> */}
                    {
                        this.props.followers.map((val,idx) => {
                            return (<Card.Text key={idx}>{val.login}</Card.Text>);
                        })
                    }
                    <Button variant="primary" href={this.props.userInfo.html_url}>Go somewhere</Button>
                </Card.Body>
            </Card>
        );
    }
}