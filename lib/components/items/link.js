'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _item = require('../item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _react2['default'].createClass({
	displayName: 'link',

	render: function render() {
		var className = 'action';
		var icon = null;
		var subitems = null;
		var liclass = 'btn toolbar-button toolbar-link';
		var href = '#';

		if (typeof this.props.data.className != 'undefined' && this.props.data.className) {
			className += ' ' + this.props.data.className;
		}

		if (typeof this.props.data.visible != 'undefined' && !this.props.data.visible) {
			return null;
		}

		if (typeof this.props.data.icon != 'undefined' && this.props.data.icon) {
			icon = this.props.data.icon;
		}

		if (typeof this.props.data.href != 'undefined' && this.props.data.href) {
			href = this.props.data.href;
		}

		if (typeof this.props.data.liClass != 'undefined' && this.props.data.liClass) {
			liclass += ' ' + this.props.data.liClass;
		}

		if (this.props.data.items && _underscore2['default'].isArray(this.props.data.items) && this.props.data.items.length) {
			liclass += ' has-sub';

			subitems = _react2['default'].createElement(
				'ul',
				null,
				this.props.data.items.map(function (item) {
					return _react2['default'].createElement(_item2['default'], { data: item, key: item.liKey || CBI.Utils.uniqueid2() });
				})
			);
		}

		if (icon) {
			return _react2['default'].createElement(
				'li',
				{ className: liclass },
				_react2['default'].createElement(
					'a',
					{ className: className, href: href },
					_react2['default'].createElement(
						'span',
						{ className: 'btn-icon' },
						_react2['default'].createElement('i', { className: icon })
					),
					_react2['default'].createElement(
						'span',
						{ className: 'btn-caption' },
						this.props.data.label
					)
				),
				subitems
			);
		}

		return _react2['default'].createElement(
			'li',
			{ className: liclass },
			_react2['default'].createElement(
				'a',
				{ className: className, href: href },
				_react2['default'].createElement(
					'span',
					{ className: 'btn-caption' },
					this.props.data.label
				)
			),
			subitems
		);
	}
});
module.exports = exports['default'];