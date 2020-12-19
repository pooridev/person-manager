import React, { Component } from 'react';
import classes from './Person.module.css';

class Person extends Component {
	

  render() {
    const { click, name, changed } = this.props
		console.log('Person rendering');
		return (
			<div className={classes.Person}>
				<p onClick={click}>I'm {name}</p>
				<input type='text' onChange={changed} placeholder={name} />
			</div>
		);
	}
}
export default Person;
