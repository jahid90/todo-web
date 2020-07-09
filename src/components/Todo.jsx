import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import DoneIcon from '@material-ui/icons/Done';
import HistoryIcon from '@material-ui/icons/History';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { Commands } from '../library/Events';
import Emitter from '../library/Emitter';

export default class Todo extends Component {

    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleDelete() {
        Emitter.emit(Commands.DELETE_TODO, this.props.todo.id);
    }

    handleToggle() {
        Emitter.emit(Commands.TOGGLE_TODO, this.props.todo.id);
    }

    render() {

        const { todo } = this.props;
        const classes = todo.completed ? 'completed' : '';

        return (
            <div className='todo'>
                <Grid container spacing={3}>
                    <Grid item xs={10} className={ classes }>
                        { todo.text }
                    </Grid>
                    <Grid item xs={1}>
                        { todo.completed
                            ? <HistoryIcon className='icon' onClick={ this.handleToggle } />
                            : <DoneIcon className='icon' onClick={ this.handleToggle } /> }
                    </Grid>
                    <Grid item xs={1}>
                        <DeleteForeverIcon className='icon' onClick={ this.handleDelete } />
                    </Grid>
                </Grid>
            </div>
        )
    }
}
