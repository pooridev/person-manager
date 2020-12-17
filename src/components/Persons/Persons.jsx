import React from 'react';
import Person from './Person/Person';


const Persons = ({ persons, clicked, changed }) => {
  console.log('Persons rendering');
  return(
    <div>
      {persons.map((person, index) => (
        <Person 
          click={()=> clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => changed(event, person.id)}/>
      ))}
    </div>
  );
}
export default Persons;