import React, { Component } from 'react';
import classes from './Person.module.css';
import Draggable from 'react-draggable'; // The default

class Person extends Component {
	render() {
		const { click, name, changed } = this.props;
		console.log('Person rendering');
		return (
			<div className={classes.Person}>
				<p></p>
				<input type='text' />
			</div>
		);
	}
}
export default Person;
