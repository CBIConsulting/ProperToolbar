import _ from "underscore";
import React from 'react';
import ToolbarItem from './item';

export default React.createClass({
	getDefaultProps: function() {
		return {
			items: [],
			uniqueId: ''
		};
	},

	componentWillMount() {
		this.uniqueId = this.props.uniqueId ? this.props.uniqueId : _.uniqueId('toolbar-');
	},

	render: function() {
		var classname = 'propertoolbar toolbar-container';
		var items = _.clone(this.props.items);
		var ritems = null;

		if (items && _.isArray(items) && items.length) {
			items = _.filter(items, function(item) {
				return (typeof item.visible == 'undefined') || item.visible;
			});

			ritems = items.map(function(item) {
				var liKey = item.liKey ? item.liKey : _.uniqueId('tbitem-');

				return <ToolbarItem data={item} key={ liKey }/>;
			});
		}

		if (this.props.className) {
			classname += ' ' + this.props.className;
		}

		return <div className={classname} id={this.uniqueId}>
			<ul id={ this.uniqueId + '_ul'}  className="toolbar-ul">
				{ritems}
			</ul>
		</div>;
	}
});