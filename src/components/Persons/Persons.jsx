import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		console.log('[Persons.jsx] shouldComponentUpdate');
		return true
	}
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[Persons.jsx] getSnapshotBeforeUpdate');
		return prevProps
	}
	componentDidUpdate() {
		console.log('[Persons.jsx] componentDidUpdate');
	}
	render() {
		console.log('Persons rendering');
		return (
			<div>
				{this.props.persons.map((person, index) => (
					<Person
						click={() => this.props.clicked(index)}
						name={person.name}
						age={person.age}
						key={person.id}
						changed={event =>this.props.changed(event, person.id)}
					/>
				))}
			</div>
		);
	}
}
export default Persons;
