import React, { Component } from 'react'
import Item from './TodoItem';
export default class TodoList extends Component {
    render() {
        return (
            <div>
                <h2> to do list
                    all done
                </h2>
                <Item />
            </div>
            
            
        )
    }
}
