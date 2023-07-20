// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import KeplerComponent from './components/KeplerComponent';

ReactDOM.render(<Component1 />, document.getElementById('component_1'));
ReactDOM.render(<Component2 />, document.getElementById('component_2'));
ReactDOM.render(<KeplerComponent />, document.getElementById('kepler'));
