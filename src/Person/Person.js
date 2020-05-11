import React from 'react';

const person = (props) => {
  return (
    <>
    <p>I'm a {props.name} Person and I am {props.age} years old!</p>
    <p>{props.children}</p>  
    {/* children are any regular text in the app page */}
    </>
  )
};

export default person;

/**
 * when using class you use this.props.
 * 
 * class Person extends Component{
 * render(){
 * return <p>My name is {this.props}</p>}}
 */