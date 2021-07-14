import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react'; 
>>>>>>> 0affdfa0fc501199bd544475afaeb4861d5dbe74
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  let initTodo;
<<<<<<< HEAD
  if (localStorage.getItem("todos") === null) {  
=======
  if (localStorage.getItem("todos") === null) {
>>>>>>> 0affdfa0fc501199bd544475afaeb4861d5dbe74
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
<<<<<<< HEAD
  const onDelete = (todo) => { 
=======
  const onDelete = (todo) => {
>>>>>>> 0affdfa0fc501199bd544475afaeb4861d5dbe74
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));

  }
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
<<<<<<< HEAD
      sno = 1;  
    }
    else {
      sno = todos[todos.length - 1].sno + 1; 
=======
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
>>>>>>> 0affdfa0fc501199bd544475afaeb4861d5dbe74
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]); 
<<<<<<< HEAD
 
=======
>>>>>>> 0affdfa0fc501199bd544475afaeb4861d5dbe74
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="TO-DO-list" />

        <Switch>
          <Route exact path="/TodoList" render={() => {
            return(
              <>
            
              <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
                  </>)
          }}>
            </Route>
        </Switch>
        <Footer />
      </Router>
         </>
  );
}
export default App;
<<<<<<< HEAD

=======
>>>>>>> 0affdfa0fc501199bd544475afaeb4861d5dbe74
