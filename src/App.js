import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
    showPersons:false
  };
  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 30 },
        { name: "Stephanie", age: 26 },
      ],
    });
  };

  nameChangedHandler=(event)=>{
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 30 },
        { name: "Stephanie", age: 26 },
      ],
    })
  }
  togglePeronsHandler=()=>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style={
      backgroundColor: 'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    }

    let persons=null;
    if(this.state.showPersons){
      persons=(

        <div >  
          {this.state.persons.map(person=>{
            return <Person name={person.name} 
            age={person.age}/>
          })}
   
      </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <p>This is a really working!</p>
        {/* returns a function call, arrow function. not executed immediately.pass an anonymous function, then gets executed when function on click is done.
        takes a event object technically as an obj. technically returns a function call */}
        <button 
        style={style}
        onClick={()=>this.togglePeronsHandler()}>Toggle Persons</button>
       

        {persons}
    
      </div>
    );
  }
}

export default App;
