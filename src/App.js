import React from 'react';
import './App.css';

import Header from './components/Header';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentItem: {text: '', key: ''},
      todos: [],
      completed: []
    };

  }

  componentDidMount() {
    const stateItem = localStorage.getItem('todoList');
    console.log(stateItem);

    if (stateItem) {
      const stateJson = JSON.parse(stateItem);
      this.setState({
        todos: stateJson.todos,
        completed: stateJson.completed
      });
    }
  }

  addTask = e => {
    e.preventDefault();

    const newItem = this.state.currentItem;

    if (newItem.text) {
      const items = [...this.state.todos, newItem];
      console.log(items);

      this.setState({
        todos: items,
        currentItem: { text: '', key: '' }
      });

      localStorage.setItem('todoList', JSON.stringify(this.state));
    }
  }

  handleTaskChange = e => {
    e.preventDefault();
    const { value } = e.target;
    const currentItem = { text: value, key: Date.now() };

    this.setState({
      currentItem
    });
  }
 
  createTasks = item => {
    return (
      <li key={item.key}>
      {item.text}
      <div className="buttons">
          <button className="remove" onClick={() => this.removeTaskOrAddToCompleted(item, 'remove')}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22'>
                <rect className='noFill' width='22' height='22' />
                <path className='fill' d='M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z'/>
                <path className='fill' d='M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z'/>
                <path className='fill' d='M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z'/>
                <path className='fill' d='M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z'/>
            </svg>       
          </button>
          <button className="complete" onClick={() => this.removeTaskOrAddToCompleted(item, 'complete')}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22'>
                <rect className='noFill' width='22' height='22' />
                <path className='fill' d='M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z'/>
              </svg>
          </button>
      </div>
      </li>
    );
  }

  createCompleted = item => {
    return (
      <li key={item.key}>
      {item.text}
      <div className="buttons">
          <button className="remove" onClick={() => this.removeCompleted(item)}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22'>
                <rect className='noFill' width='22' height='22' />
                <path className='fill' d='M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z'/>
                <path className='fill' d='M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z'/>
                <path className='fill' d='M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z'/>
                <path className='fill' d='M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z'/>
            </svg>       
          </button>
          <button className="complete" onClick={() => this.removeCompleted(item)}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22'>
                <rect className='noFill' width='22' height='22' />
                <path className='fill' d='M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z'/>
              </svg>
          </button>
      </div>
      </li>
    );
  }

  removeCompleted = item => {
    const filterItems = this.state.completed.filter(completed => {
      return completed.key !== item.key
    });

    this.setState({
      completed: filterItems
    });
  }

  removeTaskOrAddToCompleted = (item, whatToDo) => {
    
      const filterItems = this.state.todos.filter(todo => {
        return todo.key !== item.key
      });

      const completed = this.state.completed;
      
     if (whatToDo === 'complete') {
        completed.push(item);
      } 

    this.setState({
      todos: filterItems,
      completed: completed
    });
    
    console.log(this.state);
  }


  render() {
    const todos = this.state.todos;
    const todoItem = todos.map(this.createTasks);

    const completed = this.state.completed;
    let completeItem;
    if (completed) {
      completeItem = completed.map(this.createCompleted);
    }
    
      return (
       <div>

         <Header addTask={this.addTask} text={this.state.currentItem.text} taskChange={this.handleTaskChange}/>

        <div className="container">
            <ul className="todo" id="todo">
                {todoItem}
            </ul>

            <ul className="todo" id="completed">
                {completeItem}
            </ul>
        </div>
        </div>
      );
  }
}

export default App;
