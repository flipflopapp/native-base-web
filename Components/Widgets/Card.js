/* @flow */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { connectStyle } from 'native-base-shoutem-theme';
import {View} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';

class CardNB extends NativeBaseComponent {

    propTypes: {
        style : PropTypes.object
    }

    getInitialStyle() {
        return {
            card: {
                //flex: 1,
                borderWidth: this.getTheme().borderWidth,
                borderRadius: this.getTheme().borderRadiusBase,
                borderColor: this.getTheme().listBorderColor,
                //flexWrap: 'wrap',
                borderBottomWidth: 0,
                backgroundColor: this.props.transparent? 'transparent' : this.getTheme().cardDefaultBg,
                //shadowColor: this.props.transparent ? undefined : '#000',
                //shadowOffset: this.props.transparent ? undefined : {width: 0, height: 2},
                //shadowOpacity: this.props.transparent ? undefined : 0.1,
                //shadowRadius: this.props.transparent ? undefined : 1.5,
                //elevation: this.props.transparent ? undefined : 1
            }
        }
    }

    prepareRootProps() {

        var defaultProps = {
            style: this.getInitialStyle().card
        };

        return computeProps(this.props, defaultProps);

    }

    renderChildren() {
        var childrenArray = React.Children.map(this.props.children, (child) => {
            return child;
        });

        return childrenArray;
    }

    render() {
        return(
            <View {...this.prepareRootProps()} >
                {this.renderChildren()}
            </View>
        );
    }

}

export default connectStyle("NativeBase.Card", {}, mapPropsToStyleNames)(CardNB);