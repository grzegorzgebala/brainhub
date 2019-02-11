import React from 'react';
import DatePicker from 'react-datepicker';
import '../../node_modules/react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class Form extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			startDate: new Date()
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(date) {
		this.setState({
	  		startDate: date
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		let main = this.state.startDate
		console.log(main.format('L'));
	}

	render () {
		return (
			<form onSubmit={this.props.getUser}>
				<input type="text" name="name" placeholder="Name" />
				<input type="text" name="surname" placeholder="Surname" />
				<input type="text" name="mail" placeholder="Mail" />
				<DatePicker
					name="DatePicker"
					onSelect={this.handleSubmit}
					onChange={this.handleChange}
					value={this.state.startDate}
					showTimeSelect
					dateFormat="Pp"
				/>
				<button className="btn btn-primary">Submit</button>
			</form>
		);
	}
};

export default Form;