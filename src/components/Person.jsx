import React from 'react';

const Person = props => {
	return (
		<div>
			<p>{`${props.firstName} ${props.lastName}`}</p>
		</div>
	);
};

export default Person;
