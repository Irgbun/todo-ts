import React from 'react';

export class Input extends React.Component {
  render() {
    return (
        <input value={ this.props.value } onChange={ this.props.changeValue } />
    )
  }
}