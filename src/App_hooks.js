import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  // array destructuring. second paramater takes the new state it will be
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
  });

  const [otherState, setOtherState] = useState("some other value");

  // replaces the old state. we can have multiple useStates in order to make a new state.
  //for example look at line 15
  const switchNameHandler = () => {
    // console.log('Was clicked!')
    setPersonsState({
      persons: [
        { name: "Jen", age: 28 },
        { name: "Manu", age: 30 },
        { name: "Stephanie", age: 26 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a react App</h1>
      <p>This is a really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
