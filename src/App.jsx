import React, { useState } from 'react';

import { Button } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import SimpleContext from './context/SimpleContext';
import Header from './components/common/Header';
import NewPerson from './components/person/NewPerson';
import Persons from './components/person/Persons';

import './App.css';

const App = () => {
	const [getPersons, setPersons] = useState([]);
	const [getSinglePerson, setSinglePerson] = useState('');
	const [getShowPersons, setShowPersons] = useState(true);

	// Show/Hide Persons
	const handleShowPerson = () => {
		setShowPersons(!getShowPersons);
	};
	// Delete Person
	const handleDeletePerson = id => {
		const persons = [...getPersons];
		const filteredPersons = persons.filter(person => person.id !== id);
		setPersons(filteredPersons);
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
	const handleChangePerson = (event, id) => {
		const allPersons = getPersons;
		const personIndex = allPersons.findIndex(person => person.id === id);

		const person = allPersons[personIndex];
		person.fullName = event.target.value;
		
		const persons = [...allPersons];
		persons[personIndex] = person;

		setPersons(persons);
	};
	// New Person
	const handleNewPerson = () => {
		const taskInput = document.querySelector('.taskInput');
		if (taskInput.value === null || taskInput.value === '') return;
		const persons = [...getPersons];
		const person = {
			id: Math.floor(Math.random() * 100),
			fullName: getSinglePerson
		};

		persons.push(person);
		setPersons(persons);
		setSinglePerson('');
		// New Person Toast
		toast.success('person has been added.', {
			position: 'bottom-right',
			closeButton: true,
			closeOnClick: true
		});
	};

	const setPerson = event => {
		setSinglePerson(event.target.value);
	};

	let person = null;
	if (getShowPersons) {
		person = <Persons />;
	}
	return (
		
		<SimpleContext.Provider
			value={{
				persons: getPersons,
				person: getSinglePerson,
				handleChangePerson: handleChangePerson,
				handleDeletePerson: handleDeletePerson,
				handleNewPerson: handleNewPerson,
				setPerson: setPerson
			}}>
			<div className='text-center'>
				{/*Main Header */}
				<Header appTitle='Person Manager' />
				{/*/Main Header */}
				{/* New Person */}
				<NewPerson />
				{/*/New Person */}
				<Button
					onClick={handleShowPerson}
					variant={getShowPersons ? 'success' : 'danger'}>
					{getShowPersons ? 'hide persons' : 'show persons'}
				</Button>
				{person}
				<ToastContainer />
			</div>
		</SimpleContext.Provider>
	);
};
export default App;
