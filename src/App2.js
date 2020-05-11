// uses props with functional component in Person.js 

import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {


  render() {
  return (
   <div className="App">
     <h1>Hi, I'm a react App</h1>
     <p>This is a really working!</p>

     {/* uses props */}
     <Person name="Max" age="29"/>
     <Person name="Manu" age="40">My hobbies: Racing</Person>
   </div>
  );
 }
}

export default App;
