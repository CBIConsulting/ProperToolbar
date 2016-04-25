import _ from "underscore";
import React from 'react';
import ToolbarItem from '../item';

export default React.createClass({
	render: function() {
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

		if (this.props.data.items && _.isArray(this.props.data.items) && this.props.data.items.length) {
			liclass += ' has-sub';

			subitems = <ul>
				{
					this.props.data.items.map(function(item) {
						return <ToolbarItem data={item} key={item.liKey || CBI.Utils.uniqueid2()} />;
					})
				}
			</ul>;
		}

		if (icon) {
			return <li className={liclass}>
				<a className={className} href={href}>
					<span className="btn-icon"><i className={icon}></i></span>
					<span className="btn-caption">{this.props.data.label}</span>
				</a>
				{subitems}
			</li>;
		}

		return <li className={liclass}>
			<a className={className} href={href}>
				<span className="btn-caption">{this.props.data.label}</span>
			</a>
			{subitems}
		</li>;
	}
});