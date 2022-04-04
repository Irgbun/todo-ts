import React from 'react';

interface TaskListProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export class TaskList extends React.Component<TaskListProps> {
  render() {
    return (
      <ul>
            {this.props.todos
              .filter((item) => {
                if (this.props.filter === "all") {
                  return true;
                } else if (this.props.filter === "done") {
                  return item.isDone;
                } else {
                  return !item.isDone;
                }
              })
              .map((item) => {
                return (
                  <li key={item.id}>
                    <input
                      type="checkbox"
                      checked={item.isDone}
                      onChange={() => this.props.changeCheckBox(item.id)}
                    />{" "}
                    {item.text}
                  </li>
                );
              })}
        </ul>
    )
  }
}