import React from 'react';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <button onClick={ this.props.onClick } >
        {this.props.children}
      </button>
    )
  }
}