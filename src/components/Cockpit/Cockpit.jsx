import React from 'react';
import classes from './CockPit.module.css'

const cockPit = ({ persons, clicked, showPersons, title }) => {
  const assignedClasses = [];
  let btnClasses = '';
  if (showPersons) btnClasses = classes.red;
  persons.length <= 2 
    && assignedClasses.push('red');
  persons.length <= 1 
    && assignedClasses.push('bold');
  
  return(
    <div className={classes.Cockpit}>
      <p className={assignedClasses.join(' ')}>{title}</p>
      <button 
        onClick={clicked}
        alt={showPersons}
        className={btnClasses}
        >
        Toggle
      </button>
    </div>
  );
};

export default cockPit;