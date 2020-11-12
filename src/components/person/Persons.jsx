import React, { Component } from 'react';
import Person from './Person';
import SimpleContext from './../../context/SimpleContext';

class Persons extends Component {
	render() {
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
	}
}
export default Persons;
