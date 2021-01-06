import React, { Component } from 'react';




const MyComponent = props => {
        return(
            <div className="card">
                <h1>{props.firstName}</h1>
                <p>First Name: {props.lastName}</p>
                <p>Last Name: {props.age}</p>
                <p>Hair Color: {props.hairColor}</p>
            </div>
        );
    }
    



export default MyComponent;