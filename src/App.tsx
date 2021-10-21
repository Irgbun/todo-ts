import React from 'react';
import './App.css';
import { RadioGroup, Input, Button, TaskList } from './components'


interface StateTypes {
  value: string;
  todos: { id: string; text: string; isDone: boolean }[];
  filter: string;
}

export class App extends React.Component<{}, StateTypes> {
  state = {
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

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };

  onClick = () => {
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos,
        { text: prevState.value, isDone: false, id: (prevState.todos.length + 1).toString() }
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

  changeRadioButton = (filter: string) => {
    this.setState({ filter });
  };


  render() {

    const options = [
      { key: "all" , label: "Всё"  },
      { key: "done" , label: "Сделано"  },
      { key: "undone" , label: "Не сделано"  },
    ]

    return (
      <div>
        <div>
          <Input value={ this.state.value } onChange={ this.onChange } />
          <Button onClick={ this.onClick }>Add task</Button>
        </div>
        <div>
          <RadioGroup
            value={ this.state.filter }
            options={ options }
            onChange={ this.changeRadioButton }
          />
        </div>
        <div>
          <TaskList onChange={ this.changeCheckBox } />
        </div>
      </div>
    )
  }
}