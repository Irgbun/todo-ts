import React from 'react';

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export class Input extends React.Component<InputProps> {
  render() {
    return (
        <input value={ this.props.value } onChange={ this.props.onChange } />
    )
  }
}