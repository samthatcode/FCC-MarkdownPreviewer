import React, { Component } from 'react';
import utils from '../utils';
import TextBox from '../components/TextBox';
import HTMLConverter from '../components/HTMLConverter';
import marked from 'marked';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state ={
			text: utils.getText()
		}	
	}

	// get the text value and use markdown
	// do change the body text
	handleTextChange(text){
		this.setState({
			text
		});
	}

	render() {
		return (
			<div>
				<TextBox text={this.state.text} onTextChange={this.handleTextChange.bind(this)}/>
				<div>
				<HTMLConverter text={this.state.text}/>
				</div>
			</div>
		);
	}
}
