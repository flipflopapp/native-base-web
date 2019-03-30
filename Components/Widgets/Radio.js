/* @flow */
'use strict';

import React from 'react';
import { connectStyle } from 'native-base-shoutem-theme';
import {View} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import Icon from './Icon';
import Platform from '../../Utils/platform';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';

class Radio extends NativeBaseComponent {

    getInitialStyle() {
        return {
            radio: {}
        }
    }

    render() {
        return(
            <View >
            {(Platform.OS === 'ios') ?
            <Icon name={this.props.selected ? 'md-radio-button-on' : 'md-radio-button-off'} style={{color:  this.props.selected ? this.getTheme().radioSelectedColor : this.getTheme().radioColor, lineHeight: this.getTheme().radioBtnSize+4, fontSize: this.getTheme().radioBtnSize}} />
            :
            <Icon name={this.props.selected ? 'md-radio-button-on' : 'md-radio-button-off'} style={{color: this.props.selected ? this.getTheme().radioSelectedColor : this.getTheme().radioColor, lineHeight: this.getTheme().radioBtnSize+1, fontSize: this.getTheme().radioBtnSize}} />
            }
            </View>
        );
    }
}

export default connectStyle(
    "NativeBase.Radio",
    {},
    mapPropsToStyleNames
  )(Radio);