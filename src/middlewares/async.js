export default function({ dispatch }) {
	return next => action => {
		console.log(action);
		next(action);
	};
}

// in es5
// export default function({ dispatch }) {
// 	return function(next) {
// 		return function(action) {
// 			console.log(action);
// 			next(action);
// 		};
// 	};
// }
