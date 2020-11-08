import React, { Component } from 'react';

import { Button, Alert, Badge } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Persons from './components/Persons';

import './App.css';

class App extends Component {
	state = {
		persons: [
			{ fullName: 'Pooria Faramarzian', id: Math.floor(Math.random() * 100) },
			{ fullName: 'John Doe', id: Math.floor(Math.random() * 100) }
		],
		person: '',
		showPersons: true
	};
	// Show/Hide Persons
	handleShowPerson = () => {
		this.setState({ showPersons: !this.state.showPersons });
	};
	// Delete Person
	handleDeletePerson = id => {
		const persons = [...this.state.persons];
		const filteredPersons = persons.filter(person => person.id !== id);
		this.setState({ persons: filteredPersons });

		const personIndex = persons.findIndex(person => person.id === id);
		const person = persons[personIndex];

		// Toast
		toast.error(`${person.fullName} has been deleted`, {
			position: 'top-right',
			closeButton: true,
			closeOnClick: true
		});
	};
	// Edit Person
	handleChangePerson = (event, id) => {
		const { persons: allPersons } = this.state;
		const personIndex = allPersons.findIndex(person => person.id === id);
		const person = allPersons[personIndex];
		person.fullName = event.target.value;

		const persons = [...allPersons];
		persons[personIndex] = person;

		this.setState({ persons });
	};
	// New Person
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
		// Toast
		toast.success('person has been added.', {
			position: 'bottom-right',
			closeButton: true,
			closeOnClick: true
		});
	};

	setPerson = event => {
		this.setState({ person: event.target.value });
	};

	render() {
		const { persons, showPersons } = this.state;
		let badgeStyle = '';
		if (persons.length >= 3) badgeStyle = 'success';
		if (persons.length <= 2) badgeStyle = 'warning';
		if (persons.length <= 1) badgeStyle = 'danger';
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
				<Alert variant='info'>
					<h2>Person Manager</h2>
				</Alert>

				<Alert variant='light'>
					Number of persons :
					<Badge pill variant={badgeStyle}>
						{persons.length}
					</Badge>
				</Alert>

				<div className='m-2 p-2'>
					<form
						className='form-inline justify-content-center'
						onSubmit={event => event.preventDefault()}>
						<div className='input-group col-6 col-md-4'>
							<input
								type='text'
								placeholder='Give me a name'
								className='taskInput form-control'
								onChange={this.setPerson}
								value={this.state.person}
							/>

							<div className='input-group-prepend'>
								<Button
									type='submit'
									variant='success'
									size='md'
									className='fa fa-plus-square'
									onClick={this.handleNewPerson}
								/>
							</div>
						</div>
					</form>
				</div>
				<Button
					onClick={this.handleShowPerson}
					variant={showPersons ? 'success' : 'danger'}>
					{showPersons ? 'hide persons' : 'show persons'}
				</Button>
				{person}
				<ToastContainer />
			</div>
		);
	}
}
export default App;
