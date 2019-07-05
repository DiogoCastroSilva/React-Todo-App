import React from 'react';
import { connect } from 'react-redux';

import TaskItem from './TaskItem';

class Tasks extends React.Component {

    componentDidMount() {
        console.log(JSON.stringify(localStorage.getItem('todoList')));

        let storage = JSON.stringify(localStorage.getItem('todoList'));
        
    }

    removeCompleted = (item, id, whatToDo) => {
        if(id === 'todo') {
            if (whatToDo === 'complete') {
                this.props.addTaskToCompleted(item);
            } else if (whatToDo === 'remove') {
                this.props.removeTask(item);
            }
        }

        if(id === 'completed') {
            if (whatToDo === 'remove') {
                this.props.removeCompletedTask(item);
            }
        }
      }

    render() {
        const { todos, completed } = this.props;
        return (
            <div className="container">
                <TaskItem todos={todos} removeCompleted={this.removeCompleted} id='todo'  />
                <TaskItem todos={completed} removeCompleted={this.removeCompleted} id='completed' />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      todos: state.todos,
      completed: state.completed
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {
        addTaskToCompleted: (item) => { dispatch({type: 'ADD_TO_COMPLETED', id: item }); },
        removeTask: (item) => { dispatch({type: 'REMOVE_TASK', id: item });},
        removeCompletedTask: (item) => { dispatch({type: 'REMOVE_COMPLETED', id: item });}
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Tasks);