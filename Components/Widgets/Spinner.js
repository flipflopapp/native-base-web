/* @flow */
'use strict';

import React from 'react';
import { connectStyle } from 'native-base-shoutem-theme';
import { ActivityIndicator } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';

class SpinnerNB extends NativeBaseComponent {

    prepareRootProps() {

        var type = {
            height: 80
        }

        var defaultProps = {
            style: type
        }

        return computeProps(this.props, defaultProps);

    }


    render() {
        return(
            <ActivityIndicator {...this.prepareRootProps()} color={this.props.color ? this.props.color : this.props.inverse ?
                this.getTheme().inverseSpinnerColor :
                this.getTheme().defaultSpinnerColor}
                size={this.props.size ? this.props.size : 'large' } />
        );
    }

}

export default connectStyle(
    "NativeBase.Spinner",
    {},
    mapPropsToStyleNames
  )(SpinnerNB);