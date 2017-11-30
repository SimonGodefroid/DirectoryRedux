export default function({ dispatch }) {
	return next => action => {
		// If action does not have a payload or the  payload does not have a .then property, we don't care about it and send it on
		if (!action.payload || !action.payload.then) {
			return next(action);
		}
		console.log('We have a promise', action);
		// Make sure the action's promise resolves
		action.payload.then(function(response) {
			// create a new action with the old type, but replace the promise with the response data
			const newAction = { ...action, payload: response };
		});
		// sends the action to the top most middleware, runs the whole cycle of middlewares (stack of middlewares)
		dispatch(newAction);
	};
}

// step 1
// export default function({ dispatch }) {
// 	return next => action => {s
// 		console.log(action);
// 		next(action);
// 	};
// }

// in es5
// export default function({ dispatch }) {
// 	return function(next) {
// 		return function(action) {
// 			console.log(action);
// 			next(action);
// 		};
// 	};
// }
