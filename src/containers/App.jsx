import React, { Component } from 'react';

import Classes from './App.module.css';
import Persons from './../components/Persons/Persons';
import CockPit from '../components/Cockpit/Cockpit';

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
    

    const { shouldShow } = this.state;
    let persons = null;
    if(shouldShow){
      persons = (
        <div>
          <Persons
            persons={this.state.persons} 
            clicked={this.deletePersonHandler} 
            changed={this.changePersonHandler} 
          />
        </div>
      )
     
    };

    return (
      <div className={Classes.App}>
        <CockPit 
          persons={this.state.persons} 
          clicked={this.handleShowPersons} 
          showPersons={this.state.shouldShow} />
        {persons}
      </div>
    );
  };
};

export default App;
