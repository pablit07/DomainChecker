import { connect } from 'react-redux';
import UrlItem from '../components/UrlItem';
import {ADD_DOMAIN, ADD_ITEM, REMOVE_ITEM} from '../actions';


const UrlItemContainer  = connect(
	(state, ownProps) => {
		return {
			buttonText: state.UrlItems[ownProps.index].isEntered ? '-' : '+',
			urlItems: state.UrlItems,
			length: state.UrlItems.length
		};
	},
	(dispatch, ownProps) => ({
		onChangeText: (text) => dispatch({type: ADD_DOMAIN, index: ownProps.index, text}),
		addItem: () => dispatch({type: ADD_ITEM}),
		removeItem: () => dispatch({type: REMOVE_ITEM, index: ownProps.index})
	}),
	(stateProps, dispatchProps, ownProps) => ({
		...stateProps,
		...dispatchProps,
		...ownProps,
		onPress: stateProps.urlItems[ownProps.index].isEntered ? dispatchProps.removeItem : dispatchProps.addItem
	})
)(UrlItem);


export default UrlItemContainer;