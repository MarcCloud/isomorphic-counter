const React = require('react');
const Counter =require('./counter/index.jsx');
const stateProvider = require('./state-provider');

const appState = stateProvider(window.INITIAL_STATE.count);

appState.onValue(state=>React.render(<Counter {...state}/>,document.getElementById('app')))
