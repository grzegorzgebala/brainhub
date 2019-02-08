import React from 'react';
import './App.css';


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

		if ( name && surname && mail ) {
			this.setState({
				name: e.target.elements.name.value,
				surname: e.target.elements.surname.value,
				mail: e.target.elements.mail.value,
				date: e.target.elements.startDate.value,
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
	}

	render() {
		return (
			<div className="App">
				<Titles />
				<Form getUser={this.getUser} />
				<List 
					name={ this.state.name }
					surname={ this.state.surname }
					mail={ this.state.mail }
					date={ this.state.startDate }
					error={ this.state.error }
				/>
			</div>
		);
	}
};

export default App;