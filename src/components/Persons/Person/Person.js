import React from 'react'
import './Person.css'

const person = (props) => {
    return <div className="p1">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
    </div>
}


export default person;