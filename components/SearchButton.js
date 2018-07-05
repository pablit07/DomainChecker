import React from 'react';
import PropTypes from 'prop-types'
import {
	TouchableOpacity,
	View,
	Text
} from 'react-native';


const SearchButton = ({onPress, UrlItems}) => {

	return (<TouchableOpacity onPress={onPress} style={{paddingBottom:20}}>
			<Text>Search {UrlItems.length}</Text>
		</TouchableOpacity>);
}

SearchButton.propTypes = {
	onPress: PropTypes.func,
	UrlItems: PropTypes.array
}

export default SearchButton;