'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _react2['default'].createClass({
	displayName: 'toolbar',

	getDefaultProps: function getDefaultProps() {
		return {
			items: [],
			uniqueId: ''
		};
	},

	componentWillMount: function componentWillMount() {
		this.uniqueId = this.props.uniqueId ? this.props.uniqueId : _underscore2['default'].uniqueId('toolbar-');
	},


	render: function render() {
		var classname = 'propertoolbar toolbar-container';
		var items = _underscore2['default'].clone(this.props.items);
		var ritems = null;

		if (items && _underscore2['default'].isArray(items) && items.length) {
			items = _underscore2['default'].filter(items, function (item) {
				return typeof item.visible == 'undefined' || item.visible;
			});

			ritems = items.map(function (item) {
				var liKey = item.liKey ? item.liKey : _underscore2['default'].uniqueId('tbitem-');

				return _react2['default'].createElement(_item2['default'], { data: item, key: liKey });
			});
		}

		if (this.props.className) {
			classname += ' ' + this.props.className;
		}

		return _react2['default'].createElement(
			'div',
			{ className: classname, id: this.uniqueId },
			_react2['default'].createElement(
				'ul',
				{ id: this.uniqueId + '_ul', className: 'toolbar-ul' },
				ritems
			)
		);
	}
});
module.exports = exports['default'];