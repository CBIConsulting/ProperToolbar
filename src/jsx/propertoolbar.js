import Toolbar from './components/toolbar';
import Item from './components/item';
import Button from './components/items/button';
import Link from './components/items/link';

if (process.env.APP_ENV === 'browser-env') {
	require("../css/style.scss");
}

export default ProperToolbar = {
	Toolbar: Toolbar,
	Item: Item,
	Button: Button,
	Link: Link
};