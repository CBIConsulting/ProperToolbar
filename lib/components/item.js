'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _react2['default'].createClass({
	displayName: 'item',

	render: function render() {
		var Itype = ItemButton;
		var validItems = {
			'button': ItemButton,
			'link': ItemLink,
			'separator': ItemSeparator
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