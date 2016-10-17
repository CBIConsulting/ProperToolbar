import _ from "underscore";
import React from 'react';
import ToolbarItem from '../item';

export default React.createClass({
	getInitialState: function() {
		if (typeof this.props.data.disabled != 'undefined') {
			return {
				active: !this.props.data.disabled
			};
		}

		return {
			active: true
		};
	},

	handleClick: function(evt) {
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

	handleDoubleClick:function(evt) {
		evt.preventDefault();

		if(document.selection && document.selection.empty) {
			document.selection.empty();
		} else if(window.getSelection) {
			var sel = window.getSelection();
			sel.removeAllRanges();
		}
	},

	render: function() {
		var className = 'action';
		var icon = null;
		var subitems = null;
		var liclass = 'btn toolbar-button';
		var active = this.state.active;
		var title = this.props.data.title ? this.props.data.title : '';

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

		if (active && this.props.data.items && _.isArray(this.props.data.items) && this.props.data.items.length) {
			liclass += ' has-sub';

			subitems = <ul>
				{
					this.props.data.items.map(function(item) {
						return <ToolbarItem data={item} key={item.liKey || _.uniqueId('toolbar_subitem-')}/>;
					})
				}
			</ul>;
		}

		if (icon) {
			return <li className={liclass} title={title}>
				<span className={className} onClick={this.handleClick} onDoubleClick={this.handleDoubleClick}>
					<div className="btn-icon"><i className={icon}></i></div>
					<div className="btn-caption">{this.props.data.label}</div>
				</span>
				{subitems}
			</li>;
		}

		return <li className={liclass} title={title}>
			<span className={className} onClick={this.handleClick} onDoubleClick={this.handleDoubleClick}>
				<div className="btn-caption">{this.props.data.label}</div>
			</span>
			{subitems}
		</li>;
	}
});