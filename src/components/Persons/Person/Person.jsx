import React from 'react';
import classes from './Person.module.css';

const person = ({ name, click, changed }) => {
  console.log('Person rendering');
  return (
    <div className={classes.Person}>
      <p onClick={click}>I'm {name}</p>
      <input type='text' onChange={changed} placeholder={name}/>
    </div>
  );
};

export default person;