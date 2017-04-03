import React, { Component } from 'react';
import marked from 'marked';
import MarkdownParser from './MarkdownParser';

export default class HTMLConverter extends Component {
	render() {
		return (
			<div>
			<MarkdownParser html={marked(this.props.text,{sanitize: true})}/>
			</div>
		);
	}
}
