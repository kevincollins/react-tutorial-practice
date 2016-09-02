
// a simple view components

import React from 'react';

import Person from './Person';


export default class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        const {name} = this.props;
        const person = new Person(name);
        const result = person.say(25);

        return <h1>{result}</h1>;
    }
}

