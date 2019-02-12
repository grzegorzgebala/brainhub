import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import axios from 'axios';

import Titles from './components/Titles';
import Form from './components/Form';
import List from './components/List';

class App extends React.Component {
	state = {
		name: undefined,
		surname: undefined,
		mail: undefined,
		date: undefined,
		error: undefined
	}

	getUser = async (e) => {
		e.preventDefault();
		const name = e.target.elements.name.value;
		const surname = e.target.elements.surname.value;
		const mail = e.target.elements.mail.value;
		const newUser = {
			name: this.state.name,
			surname: this.state.surname,
			mail: this.state.mail,
			date: this.state.date
		}

		if ( name && surname && mail ) {
			this.setState({
				name: e.target.elements.name.value,
				surname: e.target.elements.surname.value,
				mail: e.target.elements.mail.value,
				date: e.target.elements.DatePicker.value,
				error: ""
			});
		} else {
			this.setState({
				name: undefined,
				surname: undefined,
				mail: undefined,
				date: undefined,
				error: "Please enter the value."
			});	
		}
		axios.post('http://localhost:4000/api/products/', newUser)
			.then(res => console.log(res.data));
	}

	render() {
		return (
			<div className="container">
				<Titles />
				<Form getUser={this.getUser} />
				<List 
					name={ this.state.name }
					surname={ this.state.surname }
					mail={ this.state.mail }
					date={ this.state.date }
					error={ this.state.error }
				/>
			</div>
		);
	}
};

export default App;