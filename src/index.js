import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Async from './middlewares/async';
import App from './components/app';
import reducers from './reducers';

// import and apply middleware
const createStoreWithMiddleware = applyMiddleware(Async)(createStore);
//const createStoreWithMiddleware = applyMiddleware(Async,Logger,...)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>,
	document.querySelector('.container')
);
