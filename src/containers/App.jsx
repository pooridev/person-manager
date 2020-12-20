import React, { Component } from 'react';

import Classes from './App.module.css';
import Persons from './../components/Persons/Persons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CockPit from '../components/Cockpit/Cockpit';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
class App extends Component {
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
	}

	state = {
		persons: [
			{ name: 'Poori', age: 18, id: 'kjhdktt' },
			{ name: 'Ali', age: 15, id: 'lkjdsbf' },
			{ name: 'Eden', age: 34, id: 'httytt' },
			{ name: 'Hossein', age: 15, id: '454yty' },
			{ name: 'Soqra', age: 15, id: 'oioiojy' },
			{ name: 'BlueFish', age: 20, id: 'dddf' }
		],
		shouldShow: true
	};

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}

	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[App.js] shouldComponentUpdate');
		return true;
	}
	componentDidUpdate() {
		console.log('[App.js] componentDidUpdate');
	}

	handleShowPersons = () => {
		this.setState({ shouldShow: !this.state.shouldShow });
	};

	changePersonHandler = (event, personId) => {
		const personIndex = this.state.persons.findIndex(
			person => person.id === personId
		);

		const person = {
			...this.state.persons[personIndex]
		};
		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({ persons });
	};

	deletePersonHandler = personIndex => {
		const persons = [...this.state.persons];
		toast.error(`${persons[personIndex].name} has just deleted`, {
			position: 'bottom-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined
		});
		persons.splice(personIndex, 1);
		this.setState({ persons });
	};

	render() {
		console.log('[App.js] render');
		const { shouldShow } = this.state;
		let persons = null;
		if (shouldShow) {
			persons = (
				<div>
					<Persons
						persons={this.state.persons}
						clicked={this.deletePersonHandler}
						changed={this.changePersonHandler}
					/>
				</div>
			);
		}

		return (
			<SimpleBar
				style={{
					maxHeight: '100vh',
					textAlign: 'center'
				}}
				autoHide={false}>
				<div className={Classes.App}>
					<CockPit
						title={this.props.appTitle}
						persons={this.state.persons}
						clicked={this.handleShowPersons}
						showPersons={this.state.shouldShow}
					/>
					{persons}
					<ToastContainer />
				</div>
			</SimpleBar>
		);
	}
}

export default App;
