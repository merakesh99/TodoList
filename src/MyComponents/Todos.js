import React from 'react'
import { TodoItem } from "./TodoItem"
export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "50px auto"
    }

    return (
        <div className="container text-center" style={myStyle} >
            <h3 className="my-3">Todo List</h3>
            {props.todos.length === 0 ?
                <>
                    <h5 className="card-title text-center" style={{color: 'grey'}}>No todos to display.</h5>
                </>
                :
                props.todos.map((todo) => {
                    return (
                        <>
                        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} onMark={props.onMark}/>
                        </>
                    )
                })
            }
        </div>
    )
}