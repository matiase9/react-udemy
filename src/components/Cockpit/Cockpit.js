import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';

    if ( props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.persons.lenght <= 2 ) {
        assignedClasses.push( classes.red );
    }

    if ( props.persons.lenght <= 1 ) {
        assignedClasses.push( classes.bold );
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Test</h1>
            <p className={assignedClasses.join( ' ' )}>Mensaje</p>
            <button
              className={btnClass} 
              onClick={props.clicked}>Toggle</button>
        </div>
    );
};

export default cockpit;