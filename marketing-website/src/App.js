import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact} from "./components";
import Login from "./components/Login"
import Signup from "./components/Signup"

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/signup" exact component={() => <Signup />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
