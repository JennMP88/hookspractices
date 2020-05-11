import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  const [personsState,setPersonsState]=useState({
    persons:[
      {name:"Max", age:28},
      {name:"Manu", age:29},
      {name:"Stephanie", age:26}
      ],
      otherState:'some other value'
  });

  const [otherState, setOtherState] = useState('some other value');
  // const [otherState]=useState('some other value')
  console.log(personsState,otherState);

  const switchNameHandler=()=>{
    // console.log('Was clicked!')
    setPersonsState({
      persons: 
      [
        {name:"Jen", age:28},
        {name:"Manu", age:30},
        {name:"Stephanie", age:26}
      ]
    
    })
  }

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
