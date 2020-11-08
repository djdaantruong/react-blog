import '../App.css';
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from "./about";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
