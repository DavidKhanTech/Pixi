import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Nav from "/src/components/Nav"
import Landing from "/src/components/Landing"
import Welcome from "/src/components/Welcome"
import Posts from "/src/components/Posts"
import Footer from "/src/components/Footer"
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/post/:id" component={Post} />

      </Switch>

      <Footer />
    </>
  );
}

export default App;
