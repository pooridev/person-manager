import React from 'react';

const Person = ({ firstName, lastName }) => {
	return (
		<div style={{ cursor: 'pointer' }}>
			<p>{`${firstName} ${lastName}`}</p>
		</div>
	);
};

export default Person;
