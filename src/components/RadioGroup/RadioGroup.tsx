import React from 'react';

export class RadioGroup extends React.Component {
  render() {
    return (
        <label>
        <input
          type="radio"
          name="filter"
          value={ this.props.value }
          checked={ this.props.checked }
          onChange={ this.props.changeRadioButton }
        />
            { this.props.title }
        </label>
    )
  }
}