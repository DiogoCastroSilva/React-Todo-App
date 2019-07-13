import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {

    handleTaskChange = e => {
        e.preventDefault();

        const { value } = e.target;
        const currentItem = { text: value, key: new Date() };

        this.props.changeCurrent(currentItem);
      }

      addTask = e => {
        e.preventDefault();
    
        const { currentItem } = this.props;

        if (currentItem.text) {
            this.props.addTask(currentItem);
        }   
      }

    render() {
        const { currentItem, error } = this.props;
        const styleToAdd = error ? 'red' : 'white';

        return (
            <header>
                <form onSubmit={this.addTask}>
                    <input style={{color: styleToAdd}} id="item" type="text" value={currentItem.text} placeholder="add task..." onChange={this.handleTaskChange} />
                    <button type="submit"  id="add">
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path className='fill' d='M16,8c0,0.5-0.5,1-1,1H9v6c0,0.5-0.5,1-1,1s-1-0.5-1-1V9H1C0.5,9,0,8.5,0,8s0.5-1,1-1h6V1c0-0.5,0.5-1,1-1s1,0.5,1,1v6h6C15.5,7,16,7.5,16,8z' /></svg>
                    </button>
                </form>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      currentItem: state.currentItem,
      todos: state.todos,
      error: state.error
    }
  };

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrent: (item) => { dispatch({type: 'CHANGE_CURRENT', id: item }); },
        addTask: (item) => { dispatch({type: 'ADD_TASK', id: item });}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);