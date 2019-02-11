import React from 'react';

const List = props => (
	<div>
		{ props.name && props.surname && props.mail && <p>User: { props.name } { props.surname }, { props.mail }, { props.date }</p> }
		{ props.error && <p>{ props.error }</p> }
	</div>
);


export default List;