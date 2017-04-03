import React from 'react';
import TextToMarkdown from './TextToMarkdown';
import style from './TextBox.css';
// returns a texarea with text.
// passes the text after change to the parent
export default class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }

  	// triggers on text change and passes the text
	handleChange = (e) => {
		return this.props.onTextChange(e.target.value)
	}
  render() {
    return (
      	<textarea className={style.textBox} rows="40" cols="50" onChange={this.handleChange}>{this.props.text}</textarea>
    );
  }
}
