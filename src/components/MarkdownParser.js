import React, { Component } from 'react';

export default class MarkdownParser extends Component {
	render() {
		return (
			<div dangerouslySetInnerHTML={{__html: this.props.html}}>
			
			</div>
		);
	}
}
