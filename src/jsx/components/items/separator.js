import React from 'react';

export default (props) => {
	let className = "toolbar-separator";
	let content = null;

	if (props.data.liClass) {
		className += ' ' + props.data.liClass;
	}

	if (props.data.message) {
		content = <div className="tb-separator-msg">{props.data.message}</div>;
	}

	return <li className={className}>{content}</li>;
};