import React, { Component } from 'react';

import Persons from './components/Persons';

import './App.css';

class App extends Component {
	state = {
		persons: [],
		person: '',
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
	handleNewPerson = () => {
		const persons = [...this.state.persons];
		const person = {
			id: Math.floor(Math.random) * 100,
			fullName: this.state.person
		};
		persons.push(person);
		this.setState({ persons, person: '' });
	};

	setPerson = event => {
		this.setState({ person: event.target.value });
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
				<div>
					<input
						type='text'
						placeholder='Write down new person'
						value={this.state.person}
						onChange={this.setPerson}
					/>
					<button onClick={this.handleNewPerson}>Add</button>
				</div>
				<button style={buttonStyle} onClick={this.handleShowPerson}>
					Show Persons
				</button>
				<p>{`Number of persons  : ${persons.length}`}</p>
				{person}
			</div>
		);
	}
}
export default App;
