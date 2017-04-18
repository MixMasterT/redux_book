import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.css';
import { createStore } from 'redux';

const reducer = (state, action) => state;

const store = createStore(reducer);

store.subscribe(() => document.getElementById('counter').innerText = store.getState());

setInterval(() => store.dispatch({ type: 'INC' }), 500);

console.log("Redux started");
