var ProperToolbar =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _toolbar = __webpack_require__(1);

	var _toolbar2 = _interopRequireDefault(_toolbar);

	var _item = __webpack_require__(4);

	var _item2 = _interopRequireDefault(_item);

	var _button = __webpack_require__(5);

	var _button2 = _interopRequireDefault(_button);

	var _link = __webpack_require__(6);

	var _link2 = _interopRequireDefault(_link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	if (true) {
		__webpack_require__(7);
	}

	exports['default'] = ProperToolbar = {
		Toolbar: _toolbar2['default'],
		Item: _item2['default'],
		Button: _button2['default'],
		Link: _link2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _item = __webpack_require__(4);

	var _item2 = _interopRequireDefault(_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = _react2['default'].createClass({
		displayName: 'toolbar',

		getDefaultProps: function getDefaultProps() {
			return {
				items: [],
				uniqueId: _underscore2['default'].uniqueId('toolbar-')
			};
		},

		render: function render() {
			var classname = 'cbiWidget toolbar-container';
			var items = _underscore2['default'].clone(this.props.items);
			var uniqueId = this.props.uniqueId;
			var ritems = null;

			if (items && _underscore2['default'].isArray(items) && items.length) {
				items = _underscore2['default'].filter(items, function (item) {
					return typeof item.visible == 'undefined' || item.visible;
				});

				ritems = items.map(function (item) {
					var liKey = item.liKey || _underscore2['default'].uniqueId('tbitem-');

					return _react2['default'].createElement(_item2['default'], { data: item, key: liKey });
				});
			}

			if (this.props.className) {
				classname += ' ' + this.props.className;
			}

			return _react2['default'].createElement(
				'div',
				{ className: classname, id: uniqueId },
				_react2['default'].createElement(
					'ul',
					{ id: uniqueId + '_ul', className: 'toolbar-ul' },
					ritems
				)
			);
		}
	});
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(3);

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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _item = __webpack_require__(4);

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
						return _react2['default'].createElement(_item2['default'], { data: item, key: item.liKey || CBI.Utils.uniqueid2() });
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

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _underscore = __webpack_require__(2);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _item = __webpack_require__(4);

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

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);