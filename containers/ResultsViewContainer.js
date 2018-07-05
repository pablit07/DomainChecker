import { connect } from 'react-redux';
import ResultsView from '../components/ResultsView';

const ResultsViewContainer  = connect(
	(state, ownProps) => ({
		results: Object.keys(state.results).join('\n'),
		length: Object.keys(state.results).length
	}),
	(dispatch, ownProps) => {
		return {};
	}
)(ResultsView);


export default ResultsViewContainer;