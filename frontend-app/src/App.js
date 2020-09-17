import React from "react"; 
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "./App.css";
import PasswordReset from "./components/PasswordReset";
import LinkSuccessful from "./components/LinkSuccessful";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="//" component={Signup} axact></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/passwordreset" component={PasswordReset}></Route>
          <Route path="/succussfullysent" component={LinkSuccessful}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
