import React from "react"; 
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="//" component={Signup} axact></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
