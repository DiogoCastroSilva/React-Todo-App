import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super();
    }


    render() {
        const { text } = this.props;
        return (
            <header>
                <form onSubmit={this.props.addTask}>
                    <input id="item" type="text" value={text} placeholder="add task..." value={text} onChange={this.props.taskChange} />
                    <button type="submit"  id="add">
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path className='fill' d='M16,8c0,0.5-0.5,1-1,1H9v6c0,0.5-0.5,1-1,1s-1-0.5-1-1V9H1C0.5,9,0,8.5,0,8s0.5-1,1-1h6V1c0-0.5,0.5-1,1-1s1,0.5,1,1v6h6C15.5,7,16,7.5,16,8z' /></svg>
                    </button>
                </form>
            </header>
        );
    }
}

export default Header;