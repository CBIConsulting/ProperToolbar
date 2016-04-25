import {Toolbar} from "../../src/jsx/propertoolbar";

ReactDOM.render(<Toolbar items={[
	{
		type: 'button',
		label: 'botón',
		icon: 'fa fa-rocket',
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
		icon: 'fa fa-google'
	},
	{
		type: 'button',
		label: 'Tengo subitems',
		icon: 'fa fa-caret-down',
		items: [
			{
				type: 'button',
				label: 'Github',
				icon: 'fa fa-github',
				action: function() {
					alert('github!');
				}
			}
		]
	}
]} />, document.getElementById('body'));