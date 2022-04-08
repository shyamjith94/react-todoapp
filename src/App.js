import { Component } from "react";
import Todo from "./Todo";
import AddTodo from "./AddForm";
class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play game" },
    ]
  }
  // delete todos
  deleteTodo = (id) => {
    let newTodo = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: newTodo
    })
  }
  // add new todos
  addNewTodo = (todo) => {
    todo.id = Math.random()
    let newTodo = [...this.state.todos, todo]
    this.setState({
      todos: newTodo
    })
  }
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todo's</h1>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addNewTodo={this.addNewTodo} />
      </div>
    );
  }

}

export default App;
