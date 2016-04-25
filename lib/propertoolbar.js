'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toolbar = require('./components/toolbar');

var _toolbar2 = _interopRequireDefault(_toolbar);

var _item = require('./components/item');

var _item2 = _interopRequireDefault(_item);

var _button = require('./components/items/button');

var _button2 = _interopRequireDefault(_button);

var _link = require('./components/items/link');

var _link2 = _interopRequireDefault(_link);

var _separator = require('./components/items/separator');

var _separator2 = _interopRequireDefault(_separator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

if (process.env.APP_ENV === 'browser-env') {
	require("../css/style.scss");
}

exports['default'] = ProperToolbar = {
	Toolbar: _toolbar2['default'],
	Item: _item2['default'],
	Button: _button2['default'],
	Separator: _separator2['default'],
	Link: _link2['default']
};
module.exports = exports['default'];