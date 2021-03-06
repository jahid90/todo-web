import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';
import FilterTodos from './FilterTodos';

export default class TodoList extends Component {

    render() {

        const { todos } = this.props;

        return (
            <div className='todos-container'>
                <FilterTodos />
                <div className='todos'>
                    <h4>All Todos</h4>
                    {
                        todos.map(todo => <Todo todo={ todo } key={ todo.id } />)
                    }
                </div>
            </div>
        )
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.element),
}
