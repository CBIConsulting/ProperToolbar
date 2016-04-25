import Toolbar from "../toolbar";
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import TestUtils from "react-addons-test-utils";

describe('toolbar react component', function() {

	it('the module exists', function() {
		expect(Toolbar).toBeTruthy();
	});

	it('and it works!', function() {
		let component = TestUtils.renderIntoDocument(<Toolbar />);

		expect(component).toBeTruthy();
	});

	it('can set the id', function() {
		let component = TestUtils.renderIntoDocument(<Toolbar uniqueId="test123"/>);
		expect($(ReactDOM.findDOMNode(component)).attr('id')).toBe('test123');
	});

	it('can set the class', function() {
		let component = TestUtils.renderIntoDocument(<Toolbar className="test123"/>);
		let $tb = $(ReactDOM.findDOMNode(component));

		expect($tb.hasClass('test123')).toBe(true);

	});

	it('has items', function() {

		let component = TestUtils.renderIntoDocument(<Toolbar items={[
			{label: 'item', type: 'button'},
			{label: 'item', type: 'button'},
			{label: 'item', type: 'button'}
		]} />);

		let $tb = $(ReactDOM.findDOMNode(component));

		expect($tb.find('li').length).toBe(3);
	});

	describe('items', function() {
		it('can be invisible', function() {

			let component = TestUtils.renderIntoDocument(<Toolbar items={[
				{label: 'item', type: 'button'},
				{label: 'item', type: 'button'},
				{label: 'item', type: 'button', visible: false}
			]} />);

			let $tb = $(ReactDOM.findDOMNode(component));

			expect($tb.find('li').length).toBe(2);
		});

		it('have icons', function() {

			let component = TestUtils.renderIntoDocument(<Toolbar items={[
				{label: 'item', type: 'button', icon: 'icon18 icon-github'}
			]} />);

			let $tb = $(ReactDOM.findDOMNode(component));

			expect($tb.find('li').length).toBe(1);
			expect($tb.find('li i.icon18.icon-github').length).toBe(1);
		});

		it('have custom types', function() {

			let component = TestUtils.renderIntoDocument(<Toolbar items={[
				{
					type: React.createClass({
						render: function() {
							return <div className="custom">Hola mundo</div>;
						}
					})
				}
			]} />);

			let $tb = $(ReactDOM.findDOMNode(component));

			expect($tb.find('.custom').length).toBe(1);
		});

		describe('button items', function() {

			it('have custom classes', function() {

				let component = TestUtils.renderIntoDocument(<Toolbar items={[
					{label: 'item', type: 'button', icon: 'icon18 icon-github', className: 'customclass'}
				]} />);

				let $tb = $(ReactDOM.findDOMNode(component));

				expect($tb.find('li').length).toBe(1);
				expect($tb.find('li i.icon18.icon-github').length).toBe(1);
			});

			it('can have subitems', function() {


				let component = TestUtils.renderIntoDocument(<Toolbar items={[
					{
						label: 'item',
						type: 'button',
						icon: 'icon18 icon-plus',
						items: [
							{
								label: 'subitem',
								className: 'my-subitem'
							},
							{
								label: 'subitem',
								className: 'my-subitem'
							},
							{
								label: 'subitem',
								className: 'my-subitem'
							}
						]
					}
				]} />);

				let $tb = $(ReactDOM.findDOMNode(component));

				expect($tb.find('li').length).toBe(4);
				expect($tb.find('.my-subitem').length).toBe(3);
			});

			it('can trigger actions when clicked', function() {

				var triggered = false;

				let component = TestUtils.renderIntoDocument(<Toolbar items={[
					{
						label: 'click me!',
						type: 'button',
						icon: 'icon18 icon-github',
						className: 'clickme',
						action: function() {
							triggered = true;
						}
					}
				]} />);

				let $btn = TestUtils.findRenderedDOMComponentWithClass(component, 'clickme');

				TestUtils.Simulate.click($btn);

				expect(triggered).toBe(true);
			});

			it('can be disabled when clicked', function() {

				var triggered = false;

				let component = TestUtils.renderIntoDocument(<Toolbar items={[
					{
						label: 'click me!',
						type: 'button',
						icon: 'icon18 icon-github',
						className: 'clickme',
						action: function() {
							triggered = true;
						},
						singleAction: true
					}
				]} />);

				let $btn = TestUtils.findRenderedDOMComponentWithClass(component, 'clickme');

				TestUtils.Simulate.click($btn);
				expect(triggered).toBe(true);
				triggered = false;
				TestUtils.Simulate.click($btn);
				expect(triggered).toBe(false);
			});

			it('can be disabled by default', function() {

				var triggered = false;

				let component = TestUtils.renderIntoDocument(<Toolbar items={[
					{
						label: 'click me!',
						type: 'button',
						icon: 'icon18 icon-github',
						className: 'clickme',
						action: function() {
							triggered = true;
						},
						disabled: true
					}
				]} />);

				let $btn = TestUtils.findRenderedDOMComponentWithClass(component, 'clickme');

				TestUtils.Simulate.click($btn);
				expect(triggered).toBe(false);
			});
		});

		describe('link items', function() {
			it('display', function() {

				var triggered = false;

				let component = TestUtils.renderIntoDocument(<Toolbar items={[
					{
						label: 'im a link',
						type: 'link',
						href: 'http://google.es'
					}
				]} />);

				let $tb = $(ReactDOM.findDOMNode(component));
				expect($tb.find('.action').attr('href')).toBe('http://google.es');
			});

			it('can have subitems', function() {


				let component = TestUtils.renderIntoDocument(<Toolbar items={[
					{
						label: 'item',
						type: 'link',
						href: 'http://google.es',
						icon: 'icon18 icon-google',
						items: [
							{
								type: 'button',
								label: 'subitem',
								className: 'my-subitem'
							},
							{
								type: 'link',
								label: 'subitem',
								icon: 'icon18 icon-google',
								className: 'my-subitem',
								href: 'http://google.es'
							},
							{
								label: 'subitem',
								className: 'my-subitem'
							}
						]
					}
				]} />);

				let $tb = $(ReactDOM.findDOMNode(component));

				expect($tb.find('li').length).toBe(4);
				expect($tb.find('.my-subitem').length).toBe(3);
			});
		});

		describe('separator items', function() {
			it('work', function() {

				var triggered = false;

				let component = TestUtils.renderIntoDocument(<Toolbar items={[
					{
						type: 'separator'
					}
				]} />);

				let $tb = $(ReactDOM.findDOMNode(component));
				expect($tb.find('.toolbar-separator').length).toBe(1);
			});
		});

		it('works all together', function() {

			var triggered = false;

			let component = TestUtils.renderIntoDocument(<Toolbar items={[
				{
					type: 'button',
					label: 'botón',
					icon: 'icon18 icon-rocket',
					action: function() {
						triggered = true;
					},
					singleAction: true
				},
				{
					type: 'separator'
				},
				{
					type: 'link',
					label: 'Google',
					href: 'http://google.es',
					icon: 'icon18 icon-google'
				},
				{
					type: 'button',
					label: 'Tengo subitems',
					icon: 'icon18 icon-caret-down',
					items: [
						{
							type: 'button',
							label: 'Github',
							icon: 'icon18 icon-github',
							action: function() {
								alert('github!');
							}
						}
					]
				}
			]} />);

			let $tb = $(ReactDOM.findDOMNode(component));
			expect($tb.find('li').length).toBe(5);
		});
	});
});
