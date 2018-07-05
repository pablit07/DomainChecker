import { connect } from 'react-redux';
import UrlItems from '../components/UrlItems';


const UrlItemsContainer  = connect(
	(state, ownProps) => {
		return {
			urlItems: state.UrlItems,
			length: state.UrlItems.length
		}
	},
	(dispatch, ownProps) => {
		return {};
	}
)(UrlItems);


export default UrlItemsContainer;