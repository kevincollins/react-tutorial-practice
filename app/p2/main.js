
// entry js file
import React from 'react';
import ReactDOM from 'react-dom';

import HelloMessage from './HelloMessage';

var root = document.getElementById('content');

ReactDOM.render(<HelloMessage name="kevin"/>, root);