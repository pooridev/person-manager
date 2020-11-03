import React from 'react';

const Person = ({ firstName, lastName, personDelete }) => {
	return (
		<div style={{ cursor: 'pointer' }} onClick={personDelete}>
			<p>{`${firstName} ${lastName}`}</p>
		</div>
	);
};

export default Person;
