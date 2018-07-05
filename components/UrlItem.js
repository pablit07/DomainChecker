import React from 'react';
import PropTypes from 'prop-types'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

const UrlItem = ({value, buttonText, onChangeText, onPress}) => {
	return (<View style={{flexDirection: 'row'}}>
				<TouchableOpacity style={styles.button} onPress={onPress}>
					<Text>{buttonText}</Text>
				</TouchableOpacity>
				<TextInput
					autoCapitalize={'none'}
	                autoCorrect={false}
	                style={styles.input}
	                value={value}
	                onChangeText={onChangeText}
				/>
		</View>);
}

UrlItem.propTypes = {
	value: PropTypes.string,
	buttonText: PropTypes.string,
	onChangeText: PropTypes.func,
	onPress: PropTypes.func
}

const styles = StyleSheet.create({
	  input: {
	    width: 200,
	    height: 24,
	    borderBottomWidth: 1,
	    borderBottomColor: 'black',
	    marginBottom: 10,
	    fontSize: 14,
	    fontWeight: "normal",
	    fontStyle: "normal",
	    letterSpacing: 0.45,
	    color: "black"
	  },
	  button: {
	  	width: 22,
	  	height: 22,
	  	borderRadius: 10,
	    borderWidth: 1,
	    borderBottomColor: 'black',
	    marginBottom: 10,
	    paddingLeft: 5,
	    marginRight: 5
	  },
	  buttonText: {
	  	fontSize: 14,
	    fontWeight: "normal",
	    fontStyle: "normal",
	    letterSpacing: 0.45,
	    color: "black"
	  }
})

export default UrlItem;