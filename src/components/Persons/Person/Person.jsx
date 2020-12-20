import React, { Component } from 'react';
import classes from './Person.module.css';
import Draggable from 'react-draggable'; // The default
import { DraggableCore } from 'react-draggable'; // <DraggableCore>

class Person extends Component {
	render() {
		const { click, name, changed } = this.props;
		console.log('Person rendering');
		return (
			<Draggable
				axis='y'
				defaultPosition={{ x: 0, y: 0 }}
				position={null}
				scale={1}
				onStart={this.handleStart}
				onDrag={this.handleDrag}
				onStop={this.handleStop}>

				<div className={classes.Person}>
					<p onClick={click}>I'm {name}</p>
					<input type='text' onChange={changed} placeholder={name} />
				</div>
			</Draggable>
		);
	}
}
export default Person;
