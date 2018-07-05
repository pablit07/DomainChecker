import { connect } from 'react-redux';
import SearchButton from '../components/SearchButton';
import { createSearchAction } from '../actions';


const SearchButtonContainer  = connect(
	(state) => ({
		UrlItems: state.UrlItems,
		length: state.UrlItems.length,
		searchTerms: state.searchTerms,
		tld: state.tld
	}),
	(dispatch, ownProps) => {
		return {
			search: (searchTerms, tld) => dispatch(createSearchAction(dispatch, searchTerms, tld))
		};
	},
	(stateProps, dispatchProps, ownProps) => ({
		...stateProps,
		onPress: () => {
			stateProps.searchTerms = stateProps.UrlItems.filter(item => item.value).map(item => item.value);
			if (stateProps.searchTerms.length) dispatchProps.search(stateProps.searchTerms, stateProps.tld);
		}
	})
)(SearchButton);


export default SearchButtonContainer;