import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import styled from 'styled-components';
const StyledApp = styled.div`
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  text-align: left;
}


`
const whatIsToDo = [
  {
    name: "Test",
    id: 0,
    completed: false,
  },
  {
    name: 'test2',
    id: 1,
    completed: false,
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //constructor with state
  constructor() {
    super();
    this.state = { whatIsToDo };
  }

  //handle toggle function passed down through props
  //make a copy of my groceries
  //find the item in groceries that matches my current id
  //set purchased property of that item to true/false
  handleToggle = (itemID) => {
    this.setState({
      whatIsToDo: this.state.whatIsToDo.map((item) => {
        if (itemID === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  //handle the add
  handleAdd = (name) => {
    this.setState({
      whatIsToDo: [
        ...this.state.whatIsToDo,
        { name: name, id: Date.now(), completed: false },
      ],
    });
  };

  //handle purchased
  //make a copy of my groceries
  //remove all grocery items that have purchased = true
  //set state to that
  handlePurchased = () => {
    this.setState({
      whatIsToDo: this.state.whatIsToDo.filter((item) => {
        return !item.completed;
      }),
    });
  };
 
  render() {
    return (
      <StyledApp>
        <div className='header'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAdd={this.handleAdd} />
        </div>
        <TodoList
          handlePurchased={this.handlePurchased}
          whatIsToDo={this.state.whatIsToDo}
          handleToggle={this.handleToggle}
        />
        
      </StyledApp>
    );
  }
}

export default App;
