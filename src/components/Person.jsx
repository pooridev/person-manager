import React from 'react';

const Person = ({ firstName, lastName }) => {
	return (
		<div>
			<p>{`${firstName} ${lastName}`}</p>
		</div>
	);
};

export default Person;
