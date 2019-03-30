/* @flow */
'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import lightTheme from '../Themes/light';

const THEME_STYLE = "@@shoutem.theme/themeStyle";

export default class NativeBaseComponent extends Component {
	static contextTypes = {
		theme: PropTypes.object,
		foregroundColor: PropTypes.string
	}

	static propTypes = {
		theme: PropTypes.object,
		foregroundColor: PropTypes.string
	}

	static childContextTypes = {
		theme: PropTypes.object,
		foregroundColor: PropTypes.string
	}

	getChildContext() {
		return {
			theme: this.props.theme ? this.props.theme : this.context.theme,
			foregroundColor: this.props.foregroundColor ? this.props.foregroundColor : this.getTheme().textColor
		};
	}

	getContextForegroundColor() {
		return this.context.foregroundColor || this.getTheme().textColor
	}

	getTheme() {
		let theme = this.props.theme ? this.props.theme :
							this.context.theme ? this.context.theme[THEME_STYLE].variables :
																	 lightTheme;
		if (typeof theme == 'function') {
				return theme();
		} else {
				return theme;
		}
	}
}
