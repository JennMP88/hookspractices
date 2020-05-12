import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: '001',name: "Max", age: 28 },
      { id: '007', name: "Manu", age: 29 },
      { id: '002', name: "Stephanie", age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false
  };

// get id or idx of the user in the array
  nameChangedHandler = (event, id) => {
    const personIndex=this.state.persons.findIndex(p=>{
      return p.id===id;//will return true if yes
    });

    //Alternative way to make a copy of the object  
    // const person=Object.assign({}, this.state.persons[personIndex])
    const person={
      ...this.state.persons[personIndex] 
    };

    person.name=event.target.value;

    const persons=[...this.state.persons];
    persons[personIndex]=person
   
    this.setState({persons:persons})

  };

  deletePersonHandler=(personIndex)=>{
   const persons=[...this.state.persons];
   persons.splice(personIndex,1)
   this.setState({persons:persons}) //set to new updated person
  }


  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
            click={()=> {this.deletePersonHandler(index)}}
            // click={this.deletePersonHandler.bind(this,index)}
            name={person.name} 
            age={person.age}
            key={person.id} 
            changed={(event)=>this.nameChangedHandler (event, person.id)}/>
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <p>This is a really working!</p>
        {/* returns a function call, arrow function. not executed immediately.pass an anonymous function, then gets executed when function on click is done.
        takes a event object technically as an obj. technically returns a function call */}
        <button 
        style={style}
         onClick={() => this.togglePersonHandler()}>
          Toggle Persons
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
