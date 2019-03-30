/* @flow */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { connectStyle } from 'native-base-shoutem-theme';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';
import { ScrollView } from 'react-native';

class Content extends NativeBaseComponent {

	propTypes: {
        padder : PropTypes.bool,
		style : PropTypes.object
    }

	prepareRootProps() {

		var type = {
			backgroundColor: (this.props.style && this.props.style.backgroundColor) || 'white',
			flex: 1
		}

		var defaultProps = {
			style: type
		}

		return computeProps(this.props, defaultProps);
	}

	render() {
		const contentContainerStyle = this.props.contentContainerStyle || {};
		contentContainerStyle.padding = (this.props.padder) ? this.getTheme().contentPadding : 0;
		return(
			<ScrollView {...this.prepareRootProps()} contentContainerStyle={contentContainerStyle}>{this.props.children}</ScrollView>
		);
	}
}

export default connectStyle(
  "NativeBase.Content",
  {},
  mapPropsToStyleNames
)(Content);