import React from 'react';

import Person from './components/Person';
import './App.css';

const App = () => {
	return (
		<div className='App'>
			<h2>Hello World</h2>
			<hr />
			<Person firstName='Pooria' lastName='Faramarzian' />
		</div>
	);
};
export default App;
