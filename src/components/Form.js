import React from 'react';
import '../../node_modules/react-datepicker/dist/react-datepicker.css';
import TextField from '@material-ui/core/TextField';
import './Form.css';
import axios from 'axios';

class Form extends React.Component {
	state = {
		name: "",
		surname: "",
		mail: "",
		date: ""
	}
	
	validate = (e) => {
		let isError = false;
		const errors = {
	      nameError: "",
	      surnameError: "",
	      mailError: "",
	      dateError: ""
	    };

		if (e.name.length < 4) {
			isError = true;
			errors.nameError = "Name needs to be atleast 4 char long";
		};

		if (e.surname.length < 4) {
			isError = true;
			errors.surnameError = "Surname needs to be atleast 4 char long";
		};

		if (e.mail.indexOf("@") === -1) {
	      isError = true;
	      errors.mailError = "Requires valid email";
	    };

		if (e.date < new Date().toISOString().slice(0,10)) {
	      isError = true;
	      errors.mailError = "Requires valid date";
	    };
		
		this.setState({
			...this.state,
			...errors
		});
		
		return isError;
	}

	getUser = async (e) => {
		e.preventDefault();

		const newUser = {
			name: e.target.elements.name.value,
			surname: e.target.elements.surname.value,
			mail: e.target.elements.mail.value,
			date: e.target.elements.DatePicker.value
		}

		const err = this.validate(newUser);
		if (!err) {

		axios.post('http://localhost:4000/api/products/', newUser)
		.then(res => console.log(res.data));
		} 
	}

	render () {
		return (
			<form className="inputForm" onSubmit={this.getUser}>
				<div className="row">	
					<TextField
						className="field"
						type="text"
						label="Name"
						name="name" 
	          			placeholder="Name"
	          			errortext={this.state.nameError}
					/><br />
					<TextField
						className="field"
						type="text"
						label="Surname"
						name="surname"
						placeholder="Surname"
						errortext={this.state.surnameError}
					/>
					<TextField
						className="field"
						type="text" 
						label="Mail"
						name="mail"
						placeholder="Mail"
						errortext={this.state.mailError} 
					/>
					<TextField
						className="field"
				        id="date"
				        name="DatePicker"
				        label="Meetup date"
				        type="date"
				        defaultValue={new Date().toISOString().slice(0,10)}
				        InputLabelProps={{
				          shrink: true,
				        }}
				    />
					<button className="btn btn-primary">Submit</button>
				</div>
				<div className="errors">
					<div>{this.state.nameError}</div>
					<div>{this.state.surnameError}</div>
					<div>{this.state.mailError}</div>
					<div>{this.state.dateError}</div>
				</div>
			</form>
		);
	}
};

export default Form;