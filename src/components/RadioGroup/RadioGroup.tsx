import React from 'react';

interface RadioGroupProps {
  value: string;
  onChange: (value: string) => void;
  options: { key: string, label: string }[];
}

export class RadioGroup extends React.Component<RadioGroupProps> {
  render() {
    return (  
      <div>
        {this.props.options.map(({ key, label }) => {
          return (
            <label>
              <input
                type="radio"
                name="filter"
                checked={this.props.value === key}
                onChange={() => this.props.onChange(key)}
              />
              {label}
            </label>
          );
        })}
      </div>
    )
  }
}