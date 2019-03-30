/* @flow */
'use strict';

import React from 'react';
import { connectStyle } from 'native-base-shoutem-theme';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';


class TextNB extends NativeBaseComponent {

	propTypes: {
        style : PropTypes.object
    }

	prepareRootProps() {

		var type = {
			color: this.getContextForegroundColor(),
			fontSize: this.getTheme().fontSizeBase,
			lineHeight: this.getTheme().lineHeight,
			fontFamily: this.getTheme().fontFamily
		}

		var defaultProps = {
			style: type
		}

		return computeProps(this.props, defaultProps);

	}
	render() {
		return(
			<Text {...this.prepareRootProps()}>{this.props.children}</Text>
		);
	}

}

export default connectStyle(
	"NativeBase.Text",
	{},
	mapPropsToStyleNames
)(TextNB);