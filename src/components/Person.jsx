import React from 'react';

import './Person.css'
const Person = ({ fullName, personDelete, changed }) => {
	return (
		<div className="person">
			<p>{`${fullName}`}</p>
			<input type='text' onChange={changed}></input>
			<button onClick={personDelete}>Delete</button>
		</div>
	);
};

export default Person;
