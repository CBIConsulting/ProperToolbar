import React from 'react';
import ItemButton from './items/button';
import ItemLink from './items/link';
import ItemSeparator from './items/separator';

export default React.createClass({
	render: function() {
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

			return <li className={liClass}>{this.props.data.custom}</li>;
		}

		if (typeof validItems[this.props.data.type] != 'undefined') {
			Itype = validItems[this.props.data.type];
		}

		if (typeof this.props.data.type == 'function') {
			Itype = this.props.data.type;
		}

		return <Itype data={this.props.data} />;
	}
});