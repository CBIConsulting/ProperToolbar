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
	displayName: 'button',

	getInitialState: function getInitialState() {
		if (typeof this.props.data.disabled != 'undefined') {
			return {
				active: !this.props.data.disabled
			};
		}

		return {
			active: true
		};
	},

	handleClick: function handleClick(evt) {
		evt.preventDefault();
		evt.stopPropagation();

		if (this.state.active && typeof this.props.data.action == 'function') {
			this.props.data.action.call(null, this.props.data);

			if (typeof this.props.data.singleAction != 'undefined' && this.props.data.singleAction) {
				this.setState({
					active: false
				});
			}
		}
	},

	handleDoubleClick: function handleDoubleClick(evt) {
		evt.preventDefault();

		if (document.selection && document.selection.empty) {
			document.selection.empty();
		} else if (window.getSelection) {
			var sel = window.getSelection();
			sel.removeAllRanges();
		}
	},

	render: function render() {
		var className = 'action';
		var icon = null;
		var subitems = null;
		var liclass = 'btn toolbar-button';
		var active = this.state.active;

		if (typeof this.props.data.visible != 'undefined' && !this.props.data.visible) {
			return null;
		}

		if (typeof this.props.data.liClass != 'undefined' && this.props.data.liClass) {
			liclass += ' ' + this.props.data.liClass;
		}

		if (!active) {
			liclass += ' disabled';
		}

		if (typeof this.props.data.className != 'undefined' && this.props.data.className) {
			className += ' ' + this.props.data.className;
		}

		if (typeof this.props.data.icon != 'undefined' && this.props.data.icon) {
			icon = this.props.data.icon;
		}

		if (active && this.props.data.items && _underscore2['default'].isArray(this.props.data.items) && this.props.data.items.length) {
			liclass += ' has-sub';

			subitems = _react2['default'].createElement(
				'ul',
				null,
				this.props.data.items.map(function (item) {
					return _react2['default'].createElement(_item2['default'], { data: item, key: item.liKey || _underscore2['default'].uniqueId('toolbar_subitem-') });
				})
			);
		}

		if (icon) {
			return _react2['default'].createElement(
				'li',
				{ className: liclass },
				_react2['default'].createElement(
					'span',
					{ className: className, onClick: this.handleClick, onDoubleClick: this.handleDoubleClick },
					_react2['default'].createElement(
						'div',
						{ className: 'btn-icon' },
						_react2['default'].createElement('i', { className: icon })
					),
					_react2['default'].createElement(
						'div',
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
				'span',
				{ className: className, onClick: this.handleClick, onDoubleClick: this.handleDoubleClick },
				_react2['default'].createElement(
					'div',
					{ className: 'btn-caption' },
					this.props.data.label
				)
			),
			subitems
		);
	}
});
module.exports = exports['default'];