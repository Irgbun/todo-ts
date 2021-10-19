import React from 'react';
import './App.css';
import { RadioGroup, Input, Button, TaskList } from './components'


interface StateTypes {
  value: string;
  todos: object;
  filter: string;
}

export class App extends React.Component {
  state: StateTypes = {
    value: "",
    todos: [
      { id: "1", text: "Play", isDone: false },
      { id: "2", text: "Jump", isDone: true },
      { id: "3", text: "Speak", isDone: true },
      { id: "4", text: "Run", isDone: false },
      { id: "5", text: "Sing", isDone: false },
      { id: "6", text: "Think", isDone: true }
    ],
    filter: "all"
  };

  changeValue = (event: any) => {
    this.setState({ value: event.target.value });
  };

  buttonOnClick = () => {
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos,
        { text: prevState.value, isDone: false, id: prevState.todos.length + 1 }
      ],
      value: ""
    }));
  };

  changeCheckBox = (id: number) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((el: any) => {
        if (el.id !== id) {
          return el;
        } else {
          return { ...el, isDone: !el.isDone };
        }
      })
    }));
  };

  changeRadioButton = (event: any) => {
    this.setState({ filter: event.target.value });
  };


  render() {
    return (
      <div>
        <div>
          <Input value={this.state.value} onChange={this.changeValue} />
          <Button onClick={this.buttonOnClick}>Add task</Button>
        </div>
        <div>
          <RadioGroup
            value="all"
            checked={this.state.filter === "all"}
            onChange={this.changeRadioButton}
          >
            Всё
          </RadioGroup>
          <RadioGroup
            value="undone"
            checked={this.state.filter === "undone"}
            onChange={this.changeRadioButton}
          >
            Не сделано
          </RadioGroup>
          <RadioGroup
            value="done"
            checked={this.state.filter === "done"}
            onChange={this.changeRadioButton}
          >
            Сделано
          </RadioGroup>
        </div>
        <div>
          <TaskList props={(this.changeCheckBox, this.state)} />
        </div>
      </div>
    )
  }
}