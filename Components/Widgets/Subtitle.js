/* @flow */
'use strict';

import React from 'react';
import { connectStyle } from 'native-base-shoutem-theme';
import {Text, View } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import Platform from '../../Utils/platform';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';

class Subtitle extends NativeBaseComponent {

	render() {
		return(
			<View><Text style={{color: this.getTheme().subtitleColor , fontSize: this.getTheme().subTitleFontSize, alignSelf: (Platform.OS === 'ios' ) ? 'center' : 'flex-start'}}>{this.props.children}</Text></View>
		);
	}
}

export default connectStyle(
	"NativeBase.Subtitle",
	{},
	mapPropsToStyleNames
)(Subtitle);