//import logo from './logo.svg';

import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
    // JSX- Javascript Syntax Extension
function App() {

return(
<>
<Header title="My TODO list"/>
<Todos/>
<Footer/>
</>

 
 

);

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
}

export default App;
