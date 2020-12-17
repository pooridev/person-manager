import React, { Component } from 'react';

import Classes from './App.module.css';
import Persons from './../components/Persons/Persons';
import CockPit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  };

  state = {
    persons:[
      { name:'Poori' , age: 18, id:'kjhdktt' },
      { name: 'Ali' , age: 15, id:'lkjdsbf' },
      { name: 'BlueFish' , age: 20, id:'dddf' }
    ],
    shouldShow: false
  };
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }
  componentWillMount(){
    console.log('[App.js] componentWillMount');
  }
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  handleShowPersons = () => {
    this.setState({ shouldShow : !this.state.shouldShow });
  };

  changePersonHandler = (event, personId ) =>{
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
    console.log('[App.js] render');

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
          title={this.props.appTitle}
          persons={this.state.persons} 
          clicked={this.handleShowPersons} 
          showPersons={this.state.shouldShow} />
        {persons}
      </div>
    );
  };
};

export default App;
