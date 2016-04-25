'use strict';

var _toolbar = require('../toolbar');

var _toolbar2 = _interopRequireDefault(_toolbar);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

describe('toolbar react component', function () {

	it('the module exists', function () {
		expect(_toolbar2['default']).toBeTruthy();
	});

	it('and it works!', function () {
		var component = _reactAddonsTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(_toolbar2['default'], null));

		expect(component).toBeTruthy();
	});

	it('can set the id', function () {
		var component = _reactAddonsTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(_toolbar2['default'], { uniqueId: 'test123' }));
		expect((0, _jquery2['default'])(_reactDom2['default'].findDOMNode(component)).attr('id')).toBe('test123');
	});

	it('can set the class', function () {
		var component = _reactAddonsTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(_toolbar2['default'], { className: 'test123' }));
		var $tb = (0, _jquery2['default'])(_reactDom2['default'].findDOMNode(component));

		expect($tb.hasClass('test123')).toBe(true);
	});

	it('has items', function () {

		var component = _reactAddonsTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(_toolbar2['default'], { items: [{ label: 'item', type: 'button' }, { label: 'item', type: 'button' }, { label: 'item', type: 'button' }] }));

		var $tb = (0, _jquery2['default'])(_reactDom2['default'].findDOMNode(component));

		expect($tb.find('li').length).toBe(3);
	});

	describe('items', function () {
		it('can be invisible', function () {

			var component = _reactAddonsTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(_toolbar2['default'], { items: [{ label: 'item', type: 'button' }, { label: 'item', type: 'button' }, { label: 'item', type: 'button', visible: false }] }));

			var $tb = (0, _jquery2['default'])(_reactDom2['default'].findDOMNode(component));

			expect($tb.find('li').length).toBe(2);
		});

		it('have icons', function () {

			var component = _reactAddonsTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(_toolbar2['default'], { items: [{ label: 'item', type: 'button', icon: 'icon18 icon-github' }] }));

			var $tb = (0, _jquery2['default'])(_reactDom2['default'].findDOMNode(component));

			expect($tb.find('li').length).toBe(1);
			expect($tb.find('li i.icon18.icon-github').length).toBe(1);
		});

		it('have custom types', function () {

			var component = _reactAddonsTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(_toolbar2['default'], { items: [{
					type: _react2['default'].createClass({
						displayName: 'type',

						render: function render() {
							return _react2['default'].createElement(
								'div',
								{ className: 'custom' },
								'Hola mundo'
							);
						}
					})
				}] }));

			var $tb = (0, _jquery2['default'])(_reactDom2['default'].findDOMNode(component));

			expect($tb.find('.custom').length).toBe(1);
		});

		describe('button items', function () {

			it('have custom classes', function () {

				var component = _reactAddonsTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(_toolbar2['default'], { items: [{ label: 'item', type: 'button', icon: 'icon18 icon-github', className: 'customclass' }] }));

				var $tb = (0, _jquery2['default'])(_reactDom2['default'].findDOMNode(component));

				expect($tb.find('li').length).toBe(1);
				expect($tb.find('li i.icon18.icon-github').length).toBe(1);
			});

			it('can have subitems', function () {

				var component = _reactAddonsTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(_toolbar2['default'], { items: [{
						label: 'item',
						type: 'button',
						icon: 'icon18 icon-plus',
						items: [{
							label: 'subitem',
							className: 'my-subitem'
						}, {
							label: 'subitem',
							className: 'my-subitem'
						}, {
							label: 'subitem',
							className: 'my-subitem'
						}]
					}] }));

				var $tb = (0, _jquery2['default'])(_reactDom2['default'].findDOMNode(component));

				expect($tb.find('li').length).toBe(4);
				expect($tb.find('.my-subitem').length).toBe(3);
			});

			it('can trigger actions when clicked', function () {

				var triggered = false;

				var component = _reactAddonsTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(_toolbar2['default'], { items: [{
						label: 'click me!',
						type: 'button',
						icon: 'icon18 icon-github',
						className: 'clickme',
						action: function action() {
							triggered = true;
						}
					}] }));

				var $btn = _reactAddonsTestUtils2['default'].findRenderedDOMComponentWithClass(component, 'clickme');

				_reactAddonsTestUtils2['default'].Simulate.click($btn);

				expect(triggered).toBe(true);
			});

			it('can be disabled when clicked', function () {

				var triggered = false;

				var component = _reactAddonsTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(_toolbar2['default'], { items: [{
						label: 'click me!',
						type: 'button',
						icon: 'icon18 icon-github',
						className: 'clickme',
						action: function action() {
							triggered = true;
						},
						singleAction: true
					}] }));

				var $btn = _reactAddonsTestUtils2['default'].findRenderedDOMComponentWithClass(component, 'clickme');

				_reactAddonsTestUtils2['default'].Simulate.click($btn);
				expect(triggered).toBe(true);
				triggered = false;
				_reactAddonsTestUtils2['default'].Simulate.click($btn);
				expect(triggered).toBe(false);
			});

			it('can be disabled by default', function () {

				var triggered = false;

				var component = _reactAddonsTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(_toolbar2['default'], { items: [{
						label: 'click me!',
						type: 'button',
						icon: 'icon18 icon-github',
						className: 'clickme',
						action: function action() {
							triggered = true;
						},
						disabled: true
					}] }));

				var $btn = _reactAddonsTestUtils2['default'].findRenderedDOMComponentWithClass(component, 'clickme');

				_reactAddonsTestUtils2['default'].Simulate.click($btn);
				expect(triggered).toBe(false);
			});
		});

		describe('link items', function () {
			it('display', function () {

				var triggered = false;

				var component = _reactAddonsTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(_toolbar2['default'], { items: [{
						label: 'im a link',
						type: 'link',
						href: 'http://google.es'
					}] }));

				var $tb = (0, _jquery2['default'])(_reactDom2['default'].findDOMNode(component));
				expect($tb.find('.action').attr('href')).toBe('http://google.es');
			});

			it('can have subitems', function () {

				var component = _reactAddonsTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(_toolbar2['default'], { items: [{
						label: 'item',
						type: 'link',
						href: 'http://google.es',
						icon: 'icon18 icon-google',
						items: [{
							type: 'button',
							label: 'subitem',
							className: 'my-subitem'
						}, {
							type: 'link',
							label: 'subitem',
							icon: 'icon18 icon-google',
							className: 'my-subitem',
							href: 'http://google.es'
						}, {
							label: 'subitem',
							className: 'my-subitem'
						}]
					}] }));

				var $tb = (0, _jquery2['default'])(_reactDom2['default'].findDOMNode(component));

				expect($tb.find('li').length).toBe(4);
				expect($tb.find('.my-subitem').length).toBe(3);
			});
		});

		describe('separator items', function () {
			it('work', function () {

				var triggered = false;

				var component = _reactAddonsTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(_toolbar2['default'], { items: [{
						type: 'separator'
					}] }));

				var $tb = (0, _jquery2['default'])(_reactDom2['default'].findDOMNode(component));
				expect($tb.find('.toolbar-separator').length).toBe(1);
			});
		});

		it('works all together', function () {

			var triggered = false;

			var component = _reactAddonsTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(_toolbar2['default'], { items: [{
					type: 'button',
					label: 'botón',
					icon: 'icon18 icon-rocket',
					action: function action() {
						triggered = true;
					},
					singleAction: true
				}, {
					type: 'separator'
				}, {
					type: 'link',
					label: 'Google',
					href: 'http://google.es',
					icon: 'icon18 icon-google'
				}, {
					type: 'button',
					label: 'Tengo subitems',
					icon: 'icon18 icon-caret-down',
					items: [{
						type: 'button',
						label: 'Github',
						icon: 'icon18 icon-github',
						action: function action() {
							alert('github!');
						}
					}]
				}] }));

			var $tb = (0, _jquery2['default'])(_reactDom2['default'].findDOMNode(component));
			expect($tb.find('li').length).toBe(5);
		});
	});
});