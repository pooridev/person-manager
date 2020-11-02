import React, { Component } from 'react';

import Persons from './components/Persons';

import './App.css';

class App extends Component {
	state = {
		persons: [
			{ firstName: 'Pooria', lastName: 'Faramarzian' },
			{ firstName: 'Ali', lastName: 'Alavi' },
			{ firstName: 'younes', lastName: 'Ebadi' }
		]
	};
	handleChangePersons = () => {
		this.setState({
			persons: [
				{ firstName: 'Ali', lastName: 'Alavi' },
				{ firstName: 'Mohammad', lastName: 'Faramarzian' },
				{ firstName: 'Saeed', lastName: 'Ebadi' }
			]
		});
	};
	render() {
		const { persons } = this.state;
		return (
			<div className='App'>
				<h2>Hello World</h2>
				<hr />
				<Persons persons={persons} />
				<button onClick={this.handleChangePersons}>Change It</button>
			</div>
		);
	}
}
export default App;
