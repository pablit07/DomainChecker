export const ADD_DOMAIN = 'ADD_DOMAIN';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const searchActions = {
	SEARCH_START: 'SEARCH_START',
	SEARCH_SUCCESS: 'SEARCH_SUCCESS',
	SEARCH_FAIL: 'SEARCH_FAIL'
}

export function createSearchAction(dispatch, searchTerms, tld) {

	runSearchTerms(dispatch, searchTerms, tld, searchTerms.length, 0);

	return {
		type: searchActions.SEARCH_START
	}
}

function swap(array, a, b) {
	let r = array.slice();
	let tmp = r[a];
	r[a] = r[b];
	r[b] = tmp;
	return r;
}

function runSearchTerms(dispatch, searchTerms, tld, l, i) {

	if (l == 0) return;

	if (l == 1) {
		runSearchTerm(dispatch, searchTerms[0], tld);
	} else {
		runSearchTerm(dispatch, searchTerms.join(''), tld);

		for (let j = i + 1; j < l; j++) {
			runSearchTerms(dispatch, swap(searchTerms, 0, j), tld, l, i+1);
		}

		runSearchTerms(dispatch, searchTerms.slice(1), tld, l - 1, i);
	}
}

function runSearchTerm(dispatch, searchTerm, tld) {
	fetch(`http://${searchTerm}.${tld}`).then( response => {

		dispatch({
			type: searchActions.SEARCH_SUCCESS
		});

	}).catch( response => {

		dispatch({
			type: searchActions.SEARCH_FAIL,
			domain: `${searchTerm}.${tld}`
		});

	});
}