import React, { Component } from 'react';

import Persons from './components/Persons';

import './App.css';

class App extends Component {
	state = {
		persons: [],
		person: '',
		showPersons: true
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
		const taskInput = document.querySelector('.taskInput');
		if (taskInput.value === null || taskInput.value === '') return;
		const persons = [...this.state.persons];
		const person = {
			id: Math.floor(Math.random() * 100),
			fullName: this.state.person
		};

		persons.push(person);
		this.setState({ persons, person: '' });
	};

	setPerson = event => {
		this.setState({ person: event.target.value });
	};

	render() {
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
			<div className='text-center'>
				<div className='alert alert-info'>
					<h2>Person Manager</h2>
				</div>
				<h5 className='alert alert-light'>
					Number of persons :
					<span className='badge badge-pill badge-success ml-1'>
						{` ${persons.length}`}
					</span>
				</h5>

				<div className='m-2 p-2'>
					<form
						className='form-inline justify-content-center'
						onSubmit={event => event.preventDefault()}>
						<div className='input-group w-50'>
							<input
								type='text'
								placeholder='Give me a name'
								className='taskInput form-control'
								onChange={this.setPerson}
								value={this.state.person}
							/>

							<div className='input-group-prepend'>
								<button
									type='submit'
									onClick={this.handleNewPerson}
									className='btn btn-md btn-success fa fa-plus-square'
								/>
							</div>
						</div>
					</form>
				</div>
				<button onClick={this.handleShowPerson} className='btn btn-info '>
					Show Persons
				</button>
				{person}
			</div>
		);
	}
}
export default App;
