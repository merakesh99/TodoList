import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    let myStyle={
        minHeight: "70vh", //minimum height of todos 
        margin: "50px auto",

    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Todo List</h3>
            {props.todos.length===0? "No todos to display": // check todos.length is zero or not, if zero shows no todos.
        props.todos.map((todo)=>{      //map function is used pritnt all todos 
        return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> )
        })
             }
        </div>
    )
}