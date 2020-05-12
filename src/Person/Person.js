import React from "react";
import "./Person.css";

const person = (props) => {
  return (
    <>
      <div className="Person">
        <p onClick={props.click}>
          I'm a {props.name} and I am {props.age} years old!
        </p>
        <p>{props.children}</p>
        {/* children are any regular text in the app page */}

        {/* TWO-WAY BINDING when using value={propss.name} bc you are also using onChange.
both are required through value wont work without onChange/} */}
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
    </>
  );
};

export default person;

/**
 * when using class you use this.props.
 *
 * class Person extends Component{
 * render(){
 * return <p>My name is {this.props}</p>}}
 */
