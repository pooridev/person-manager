import React from 'react';
import Person from './Person';
import SimpleContext from './../../context/SimpleContext';

const Persons = () => {
	return (
		<SimpleContext.Consumer>
			{context => (
				<div>
					{context.state.persons.map(person => (
						<Person
							key={person.id}
							fullName={person.fullName}
							personDelete={() => context.handleDeletePerson(person.id)}
							changed={event => context.handleChangePerson(event, person.id)}
						/>
					))}
				</div>
			)}
		</SimpleContext.Consumer>
	);
};
export default Persons;
