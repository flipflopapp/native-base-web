/* @flow */
'use strict';

import React from 'react';
import { connectStyle } from 'native-base-shoutem-theme';
import {Picker} from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';
import mapPropsToStyleNames from '../../Utils/mapPropsToStyleNames';
import createReactClass from 'create-react-class';

class PickerNB extends NativeBaseComponent {
    
    getInitialStyle() {
        return {
            picker: {

            },
            pickerItem: {

            }
        }
    }
    prepareRootProps() {

        var defaultProps = {
            style: this.getInitialStyle().picker,
            itemStyle: this.getInitialStyle().pickerItem
        };

        return computeProps(this.props, defaultProps);

    }

    render() {
        return(
            <Picker {...this.prepareRootProps()}>
                {this.props.children}
            </Picker>
        );
    }

}

PickerNB.Item = createReactClass({

    render: function() {
        return(
            <Picker.Item {...typeof this.props === "function" ? this.props() : this.props}/>
        );
    }
});

export default connectStyle(
    "NativeBase.Picker",
    {},
    mapPropsToStyleNames
  )(PickerNB);