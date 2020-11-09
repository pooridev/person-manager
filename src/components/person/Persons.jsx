import React, { useContext } from 'react';
import Person from './Person';
import SimpleContext from './../../context/SimpleContext';

const Persons = () => {
	const context = useContext(SimpleContext);
	const { handleDeletePerson, handleChangePerson } = context;
	const { persons } = context.state;
	return (
		<div>
			{persons.map(person => (
				<Person
					key={person.id}
					fullName={person.fullName}
					personDelete={() => handleDeletePerson(person.id)}
					changed={event => handleChangePerson(event, person.id)}
				/>
			))}
		</div>
	);
};
export default Persons;
