import React from 'react';
// returns the div with the styled text
export default class Solution extends React.Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: this.props.html }}></div>
    );
  }
}
