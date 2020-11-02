import React from 'react';
import Person from './Person';

const Persons = ({ persons }) => {
	return (
		<div>
			{persons.map(person => (
				<Person firstName={person.firstName} lastName={person.lastName} />
			))}
		</div>
	);
};
export default Persons;
