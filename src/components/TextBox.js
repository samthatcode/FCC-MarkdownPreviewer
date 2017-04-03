import React from 'react';

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
      <div>
      	<textarea value={this.props.text} onChange={this.handleChange} />
      </div>
    );
  }
}
