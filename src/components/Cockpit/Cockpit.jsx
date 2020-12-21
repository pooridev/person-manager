import React, { useEffect } from 'react';
import classes from './CockPit.module.css';

const CockPit = ({ persons, clicked, showPersons, title }) => {
	useEffect(() => {
		console.log('[Cockpit.jsx] useEffect');
		// we can send Http request
		setTimeout(() => {
			prompt('SALAM');
		}, 1000);
	}, [persons]);

	const assignedClasses = [];
	let btnClasses = '';
	if (showPersons) btnClasses = classes.red;

	persons.length <= 2 && assignedClasses.push(classes.red);
	persons.length <= 1 && assignedClasses.push(classes.bold);

	return (
		<div className={classes.Cockpit}>
			<h1>{title}</h1>
			<p className={assignedClasses.join(' ')}>OMG, It's working</p>
			<button onClick={clicked} alt={showPersons} className={btnClasses}>
				Toggle
			</button>
		</div>
	);
};

export default CockPit;
