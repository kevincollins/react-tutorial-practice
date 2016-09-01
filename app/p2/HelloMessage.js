
// a simple view components

import React from 'react';

export default class HelloMessage extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <h1>Hello {this.props.name}</h1>;
    }
}

