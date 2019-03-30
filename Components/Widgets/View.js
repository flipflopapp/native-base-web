/* @flow */
'use strict';

import React from 'react';
import { connectStyle } from 'native-base-shoutem-theme';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {View} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';

class ViewNB extends NativeBaseComponent {
	propTypes: {
        style : PropTypes.object,
        padder : PropTypes.bool
    }
	render() {
		return(
			<View style={{padding: (this.props.padder) ? this.getTheme().contentPadding : 0, flex: 1}} {...this.props}></View>
			);
	}
}

export default connectStyle(
	"NativeBase.View",
	{},
	mapPropsToStyleNames
)(ViewNB);