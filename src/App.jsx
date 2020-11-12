import React, { Component } from 'react';

import { Button } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import SimpleContext from './context/SimpleContext';
import Header from './components/common/Header';
import NewPerson from './components/person/NewPerson';
import Persons from './components/person/Persons';

import './App.css';

class App extends Component {
	//Lifecycle Hooks
	constructor() {
		super();
		console.log('constructor');
	}
	state = {
		persons: [
			{ fullName: 'Pooria Faramarzian', id: Math.floor(Math.random() * 100) }
		],
		person: '',
		showPersons: true,
		appTitle: 'مدیریت کننده اشخاص'
	};

	static getDerivedStateFromProps(props, state) {
		console.log('getDerivedStateFromProps');
		console.log(state);
	}
	componentDidMount() {
		console.log('componentDidMount');
	}

	static contextType = SimpleContext;
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

		// Delete Person Toast
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

		// New Person Toast
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
		const { showPersons } = this.state;

		let person = null;
		if (showPersons) {
			person = <Persons />;
		}
		return (
			<SimpleContext.Provider
				value={{
					state: this.state,
					handleDeletePerson: this.handleDeletePerson,
					handleChangePerson: this.handleChangePerson,
					handleNewPerson: this.handleNewPerson,
					setPerson: this.setPerson
				}}>
				<div className='text-center'>
					{/*Main Header */}
					<Header appTitle='Person Manager' />
					{/*/Main Header */}
					{/* New Person */}
					<NewPerson />
					{/*/New Person */}
					<Button
						onClick={this.handleShowPerson}
						variant={this.getShowPersons ? 'success' : 'danger'}>
						{showPersons ? 'hide persons' : 'show persons'}
					</Button>
					{person}
					<ToastContainer />
				</div>
			</SimpleContext.Provider>
		);
	}
}
export default App;
