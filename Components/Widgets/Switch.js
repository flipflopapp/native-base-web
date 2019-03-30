/* @flow */
'use strict';

import React from 'react';
import { connectStyle } from 'native-base-shoutem-theme';
import PropTypes from 'prop-types';
import {Switch} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';

class SwitchNB extends NativeBaseComponent {

    propTypes: {
        style : PropTypes.object
    }

    getInitialStyle() {
        return {
            switch: {

            }
        }
    }
    prepareRootProps() {
        var defaultProps = {
            style: this.getInitialStyle().switch
        };

        return computeProps(this.props, defaultProps);
    }

    render() { 
        return(
            <Switch {...this.prepareRootProps()}/>
        );
    }
}

export default connectStyle(
    "NativeBase.Switch",
    {},
    mapPropsToStyleNames
  )(SwitchNB);