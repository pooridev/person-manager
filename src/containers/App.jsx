import React, { Component } from 'react';

import Classes from './App.module.css';
import Person from './../components/Persons/Person/Person';

class App extends Component {
  state = {
    persons:[
      { name:'Poori' , age: 18, id:'kjhdktt' },
      { name: 'Ali' , age: 15, id:'lkjdsbf' },
      { name: 'BlueFish' , age: 20, id:'dddf' }
    ],
    shouldShow: false
  };

  handleShowPersons = () => {
    this.setState({ shouldShow : !this.state.shouldShow });
  };

  changePersonHandler = (personId, event) =>{
    const personIndex = this.state.persons.findIndex(person => person.id === personId);
    
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  }

  deletePersonHandler = (personIndex ) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  render() {
    const btnClasses = [Classes.Button];

    const { persons , shouldShow } = this.state;
    let Persons = null;
    if(shouldShow){
      Persons = (
        <div>
          {persons.map((person, index) => {
              return (
                <Person
                  click={()=>this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event)=>this.changePersonHandler(person.id,event)}/>
              );
            })}
        </div>
      )
      btnClasses.push(Classes.Red)
    };
  
    const assignedClasses = [];
    if (persons.length <= 2) assignedClasses.push('red');
    if (persons.length <= 1) assignedClasses.push('bold');

    return (
      <div className={Classes.App}>
        <p className={assignedClasses.join(' ')}>OMG, It's working</p>
        <button 
          onClick={this.handleShowPersons}
          alt={this.state.shouldShow}
          className={btnClasses.join(' ')}
          >
          Toggle
        </button>
        {Persons}
      </div>
    );
  };
};

export default App;
