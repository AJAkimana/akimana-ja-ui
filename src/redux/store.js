import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import { errorHandler } from './utils/errorHandler';

const configureStore = (preloadedState = {}) => {
	const isDev = process.env.NODE_ENV === 'development';
	const middlewares = [errorHandler, thunkMiddleware, promise]; // loggerMiddleware

	let middlewareEnhancer = applyMiddleware(...middlewares);
	if (isDev) {
		middlewareEnhancer = composeWithDevTools(applyMiddleware(...middlewares));
	}

	const enhancers = [middlewareEnhancer];
	const composedEnhancers = compose(...enhancers);

	const store = createStore(reducers, preloadedState, composedEnhancers);

	return store;
};
export const store = configureStore();
