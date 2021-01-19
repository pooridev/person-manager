import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
	render() {
		const { persons, editHandler, deleteHandler } = this.props;
		return (
			<>
				<ul>
					{persons.map((person, index) => (
						<Person
							key={person.id}
							name={person.name}
							changed={e => editHandler(e, index)}
							clicked={() => deleteHandler(index)}
						/>
					))}
				</ul>
			</>
		);
	}
}
export default Persons;
