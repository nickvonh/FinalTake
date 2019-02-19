import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import Contact from "./pages/Contact";

function App() {
    return(
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/exercise" component={Exercise} />
                    <Route exact path="/program" component={Program} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;