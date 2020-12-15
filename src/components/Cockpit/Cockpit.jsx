import React from 'react';
import classes from './CockPit.module.css'

const cockPit = ({ persons, clicked, showPersons }) => {
  const assignedClasses = [];
  let btnClasses = '';
  if (showPersons) btnClasses = classes.red;
  console.log(btnClasses);
  if (persons.length <= 2) assignedClasses.push('red');
  if (persons.length <= 1) assignedClasses.push('bold');
  
  return(
    <div className={classes.Cockpit}>
      <p className={assignedClasses.join(' ')}>OMG, It's working</p>
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