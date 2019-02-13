import React, {Component} from 'react';
import axios from 'axios';

class List extends Component {
	constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/productsList')
            .then( (response) => {
                this.setState({users: response.data});
            })
    }

    render() {

        console.log(this.state.users)

        return (
            <div>
                <ul className="list">
                    {	
                        this.state.users.map(
                            user => <li>
                            			<div className="listElement">{user.name}</div>
                            			<div className="listElement">{user.surname}</div>
                            			<div className="listElement">{user.mail}</div>
                            			<div className="listElement">{user.date}</div>
                            		</li>
                        )
                    }
                </ul>
            </div>
        );
    }
};

export default List;