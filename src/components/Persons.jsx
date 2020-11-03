import React from 'react';
import Person from './Person';

const Persons = ({ persons, personDelete }) => {
	return (
		<div>
			{persons.map(person => (
				<Person
					key={person.id}
					firstName={person.firstName}
					lastName={person.lastName}
					personDelete={() => personDelete(person.id)}
				/>
			))}
		</div>
	);
};
export default Persons;
