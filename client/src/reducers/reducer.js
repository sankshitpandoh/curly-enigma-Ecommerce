import * as actionHandlers from '../actions/actions.js';

const getInitState = () => {
	return {
		userLoggedIn: false,
        currentWishList: [],
		currentCartItems : [],
		currentProduct : null,
		openProduct: false
	}
}


const MainReducer = (state = getInitState(), action) => {
	const actionHandlers = {
		['SIGN_IN']() {
			let newState = state;
			return Object.assign({}, newState, { userLoggedIn: true });
		},
		['SIGN_OUT']() {
			let newState = state;
			return Object.assign({}, newState, { userLoggedIn: false });
		},
		['OPEN_PRODUCT']() {
			let newState = state;
			let nProduct = action.payload;
			return Object.assign({}, newState, { currentProduct: nProduct, openProduct: true });
		}
	}
	if(action.type in actionHandlers) {
		return actionHandlers[action.type]();
	}

	return state;
}

export default MainReducer    