import React from 'react';

class List extends React.Component {
	render () {
		return (
			<div>
				{ this.props.name && this.props.surname && this.props.mail && <p>User: { this.props.name } { this.props.surname }, { this.props.mail }</p> }
				{ this.props.error && <p>{ this.props.error }</p> }
			</div>
		);
	}
};

export default List;