//import logo from './logo.svg';

import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';  // import useState and useEfect
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//JSX- Javascript Syntax Extension
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {  // This  is return NULL
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {  //onDelete is a arrow function
   // console.log("i am onDelete on todo", todo);
    
   // Deleting this way does not work
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));

  }
  const addTodo = (title, desc) => {
   // console.log("I am Adding this todo:", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 1;  //serial number of the todos when todos is empty
    }
    else {
      sno = todos[todos.length - 1].sno + 1; //serial number is increase by 1 
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]); //create array for add todos
   // console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="TODO list" Searchbar={false} />

        <Switch>
          <Route exact path="/" render={() => {
            return(
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>)
          }}>
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
export default App;







/*

return (
   <div classNameNameName="App">
     <header classNameNameName="App-header">
       <img src={logo} classNameNameName="App-logo" alt="logo" />
       <p>
         <div> {44+44} </div>
       </p>
       <a
         classNameNameName="App-link"
         href="https://reactjs.org"
         target="_blank"
         rel="noopener noreferrer"
       >
         hi
       </a>
     </header>
   </div>
 ); */
