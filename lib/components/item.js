'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('./items/button');

var _button2 = _interopRequireDefault(_button);

var _link = require('./items/link');

var _link2 = _interopRequireDefault(_link);

var _separator = require('./items/separator');

var _separator2 = _interopRequireDefault(_separator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _react2['default'].createClass({
	displayName: 'item',

	render: function render() {
		var Itype = _button2['default'];
		var validItems = {
			'button': _button2['default'],
			'link': _link2['default'],
			'separator': _separator2['default']
		};
		var liClass = 'toolbar-custom custom-item';

		if (this.props.data.custom) {
			if (typeof this.props.data.liClass != 'undefined' && this.props.data.liClass) {
				liClass += ' ' + this.props.data.liClass;
			}

			return _react2['default'].createElement(
				'li',
				{ className: liClass },
				this.props.data.custom
			);
		}

		if (typeof validItems[this.props.data.type] != 'undefined') {
			Itype = validItems[this.props.data.type];
		}

		if (typeof this.props.data.type == 'function') {
			Itype = this.props.data.type;
		}

		return _react2['default'].createElement(Itype, { data: this.props.data });
	}
});
module.exports = exports['default'];