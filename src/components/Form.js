import React from 'react';
import DatePicker from 'react-datepicker';
import '../../node_modules/react-datepicker/dist/react-datepicker.css';

class Form extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			startDate: new Date()
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(date) {
		this.setState({
	  		startDate: date
		});
	}

	render () {
		return (
			<form onSubmit={this.props.getUser}>
				<input type="text" name="name" placeholder="Name" />
				<input type="text" name="surname" placeholder="Surname" />
				<input type="text" name="mail" placeholder="Mail" />
				<DatePicker
					name="DatePicker"
					selected={this.state.startDate}
					onChange={this.handleChange}
        			dateFormat="yyyy/MM/dd"	
        		/>
				<button className="btn btn-primary">Submit</button>
			</form>
		);
	}
};

export default Form;