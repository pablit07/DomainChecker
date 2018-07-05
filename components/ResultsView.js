import React from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Text
} from 'react-native';

const ResultsView = ({results}) => {

	return (<View style={{marginBottom: 30}}>
			<Text>{results}</Text>
		</View>);
}

ResultsView.propTypes = {
	results: PropTypes.string
}

export default ResultsView;