import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <Router>
        <Header burgerStatus={burgerStatus} setBurgerStatus={setBurgerStatus} />
        <Switch>
          <Route exact path="/">
            <Home
              burgerStatus={burgerStatus}
              setBurgerStatus={setBurgerStatus}
            />
          </Route>
          <Route exact path="/kontakt">
            <Contact
              burgerStatus={burgerStatus}
              setBurgerStatus={setBurgerStatus}
            />
          </Route>
        </Switch>
        <Footer burgerStatus={burgerStatus} setBurgerStatus={setBurgerStatus} />
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div``;
