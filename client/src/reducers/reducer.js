import * as actionHandlers from '../actions/actions.js';

const getInitState = () => {
	return {
		userLoggedIn: false,
		currentWishList: []
	}
}


const PandohReducer = (state = getInitState(), action) => {
	const actionHandlers = {
		['SIGN_IN']() {
			let newState = state;
			return Object.assign({}, newState, { userLoggedIn: true });
		},
		['SIGN_OUT']() {
			let newState = state;
			return Object.assign({}, newState, { userLoggedIn: false });
		}
	}
	if(action.type in actionHandlers) {
		return actionHandlers[action.type]();
	}

	return state;
}

export default PandohReducer    