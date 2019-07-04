import React from 'react';

class TodoItem extends React.Component {

    render() {
        const {todos, id} = this.props;

        return(
            <ul className="todo" id={id}>
                 {todos}
            </ul>
        );
    }
}

export default TodoItem;