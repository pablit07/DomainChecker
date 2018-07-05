import {ADD_DOMAIN, ADD_ITEM, REMOVE_ITEM, searchActions} from './actions';

const initialState = {
	UrlItems: [
		// {
		// 	value: 'google',
		// 	isEntered: true
		// },
		{
			isEntered: false
		}
	],
	searchTerms: [],
	tld: 'com',
	currentIndex: 0,
	results: {}
};

function reduce(state = initialState, action) {

	if (action.type == ADD_DOMAIN) {
		state.UrlItems[action.index].value = action.text

		return {
			...state
		}
	}

	if (action.type == ADD_ITEM) {
		state.UrlItems[state.currentIndex].isEntered = true;
		state.UrlItems.push({isEntered:false});

		return {
			...state,
			currentIndex: state.currentIndex+1
		}
	}

	if (action.type == searchActions.SEARCH_START) {
		return {
			...state,
			results: {},
			searchTerms: []
		}
	}

	if (action.type == searchActions.SEARCH_FAIL) {
		state.results[action.domain] = action.domain;
		return {
			...state
		}
	}

	if (action.type == REMOVE_ITEM) {
		state.UrlItems.splice(action.index, 1);
		return {
			...state,
			currentIndex: state.currentIndex-1,	
			results: {},
			searchTerms: []
		}
	}
	
	return state;
}

export default reduce;