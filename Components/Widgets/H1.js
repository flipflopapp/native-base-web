/* @flow */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { connectStyle } from 'native-base-shoutem-theme';
import Text from './Text';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';

class H1NB extends NativeBaseComponent {

    propTypes: {
        style : PropTypes.object
    }

    prepareRootProps() {

        var type = {
            color: this.getTheme().textColor,
            fontSize: this.getTheme().fontSizeH1
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
    "NativeBase.H1",
    {},
    mapPropsToStyleNames
  )(H1NB);