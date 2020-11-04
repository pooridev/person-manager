import React, { Component } from 'react';

import Persons from './components/Persons';

import './App.css';

class App extends Component {
	state = {
		persons: [
			{ id: 1, fullName: 'Pooria Faramarzian' },
			{ id: 2, fullName: 'Ali alavi' },
			{ id: 3, fullName: 'Younes Ebadi' }
		],
		showPersons: false
	};

	handleShowPerson = () => {
		this.setState({ showPersons: !this.state.showPersons });
	};
	handleDeletePerson = id => {
		const persons = [...this.state.persons];
		const filteredPersons = persons.filter(person => person.id !== id);
		this.setState({ persons: filteredPersons });
	};
	handleChangePerson = (event, id) => {
		const { persons: allPersons } = this.state;
		const personIndex = allPersons.findIndex(person => person.id === id);
		const person = allPersons[personIndex];
		person.fullName = event.target.value;

		const persons = [...allPersons];
		persons[personIndex] = person;

		this.setState({ persons });
	};

	render() {
		const buttonStyle = {
			padding: '0.5rem',
			backgroundColor: 'skyBlue'
		};
		const { persons, showPersons } = this.state;
		let person = null;
		if (showPersons) {
			person = (
				<Persons
					persons={persons}
					personDelete={this.handleDeletePerson}
					personChange={this.handleChangePerson}
				/>
			);
		}
		return (
			<div className='App'>
				<h2>Persons Manager</h2>
				<hr />
				{person}
				<button style={buttonStyle} onClick={this.handleShowPerson}>
					Show Persons
				</button>
			</div>
		);
	}
}
export default App;
