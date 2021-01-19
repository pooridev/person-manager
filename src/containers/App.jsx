import React, { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Alert, AlertIcon, ChakraProvider, Container } from '@chakra-ui/react';
import 'simplebar/dist/simplebar.min.css';
import Header from '../components/Header/Header';
import Persons from '../components/Persons/Persons';
import Newperson from '../components/Persons/NewPerson/NewPerson';

class App extends Component {
	state = {
		person: '',
		persons: JSON.parse(localStorage.getItem('persons')) || []
	};

	// set input value to state
	setperson = e => {
		this.setState({ person: e.target.value });
	};
	// new person handler
	newPersonHandler = e => {
		e.preventDefault();
		if (this.state.person == '') return;
		const persons = [...this.state.persons];
		const person = {
			name: this.state.person,
			id: this.state.persons.length + 1
		};
		persons.push(person);
		this.setState({ persons, person: '' });
		localStorage.setItem('persons', JSON.stringify(persons));

		toast.success('Whooo, We got new person', {
			position: 'top-right',
			autoClose: 1700
		});
	};

	// edit person handler
	editPersonHandler = (e, personindex) => {
		const persons = [...this.state.persons];
		persons[personindex].name = e.target.value;

		this.setState({ persons });
		localStorage.setItem('persons', JSON.stringify(persons));
	};
	// delete person handler
	deletePersonHandler = personindex => {
		const persons = [...this.state.persons];
		persons.splice(personindex, 1);

		this.setState({ persons });
		localStorage.setItem('persons', JSON.stringify(persons));
	};

	render() {
		const { persons } = this.state;
		return (
			<ChakraProvider>
				<>
					<Header personsLength={this.state.persons.length} />
					<Container>
						<Newperson
							setPerson={this.setperson}
							newPersonHandler={this.newPersonHandler}
							state={this.state}
						/>
						{persons.length == 0 ? (
							<Alert mt='1.2rem' rounded='md' status='warning'>
								<AlertIcon />
								There is no name, you can add one above 🥰
							</Alert>
						) : null}
						<Persons
							persons={this.state.persons}
							setPerson={this.setPerson}
							deleteHandler={this.deletePersonHandler}
							editHandler={this.editPersonHandler}
						/>
					</Container>
					<ToastContainer />
				</>
			</ChakraProvider>
		);
	}
}

export default App;
