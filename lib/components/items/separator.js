'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (props) {
	var className = "toolbar-separator";
	var content = null;

	if (props.data.liClass) {
		className += ' ' + props.data.liClass;
	}

	if (props.data.message) {
		content = _react2['default'].createElement(
			'div',
			{ className: 'tb-separator-msg' },
			props.data.message
		);
	}

	return _react2['default'].createElement(
		'li',
		{ className: className },
		content
	);
};

module.exports = exports['default'];