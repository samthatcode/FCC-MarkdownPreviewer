import React, {PropTypes} from 'react';
// gets the html formatted data and present it on the screen
export default class TextToMarkdown extends React.Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.props.html}}>

			</div>
  );
  }
}

TextToMarkdown.propTypes = {
};
