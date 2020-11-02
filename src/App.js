import React, { Component } from 'react';

import Person from './components/Person';

import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			persons : [
				{firstName :'Pooria' , lastName:'Faramarzian'},
				{firstName :'Ali' , lastName:'Alavi'},
				{firstName :'younes' , lastName:'Ebadi'}
			]
		}
	}
	
	render() {
		const {persons} = this.state
		return (
			<div className='App'>
				<h2>Hello World</h2>
				<hr />
				<Person firstName={persons[0].firstName} lastName={persons[0].lastName} />
			</div>
		);
	}
}
export default App;
