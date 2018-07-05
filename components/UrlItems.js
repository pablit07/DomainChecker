import React from 'react';
import PropTypes from 'prop-types';
import UrlItem from '../containers/UrlItemContainer';


const UrlItems = ({urlItems}) => {
	return urlItems.map( (item, index) => (<UrlItem key={index} index={index} value={item.value} />) );
}

UrlItems.propTypes = {
	urlItems: PropTypes.array
}

export default UrlItems;