import React from 'react';
import TaskItem from './TaskItem';

class Tasks extends React.Component {
    render() {
        const { todoItem, completeItem } = this.props;

        return (
            <div className="container">
                <TaskItem todos={todoItem} id='todo'  />
                <TaskItem todos={completeItem} id='completed' />
            </div>
        );
    }
}

export default Tasks;