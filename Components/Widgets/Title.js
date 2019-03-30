/* @flow */
'use strict';

import React from 'react';
import { connectStyle } from 'native-base-shoutem-theme';
import PropTypes from 'prop-types';
import Platform from '../../Utils/platform';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import Text from './Text';
import View from './View';
import computeProps from '../../Utils/computeProps';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';


class Title extends NativeBaseComponent {

	propTypes: {
        style : PropTypes.object
    }

	prepareRootProps() {

		var type = {
			color: this.getTheme().toolbarTextColor,
			fontSize: this.getTheme().titleFontSize,
			fontFamily: this.getTheme().btnFontFamily,
			fontWeight: (Platform.OS === 'ios') ? '500' : undefined,
			alignSelf: (Platform.OS === 'ios' ) ? 'center' : 'flex-start'
		}

		var defaultProps = {
			style: type
		}

		return computeProps(this.props, defaultProps);

	}

	render() {
		return(
			<View style={{justifyContent: 'center'}}><Text {...this.prepareRootProps()}>{this.props.children}</Text></View>
			);
	}
}

export default connectStyle(
	"NativeBase.Title",
	{},
	mapPropsToStyleNames
)(Title);