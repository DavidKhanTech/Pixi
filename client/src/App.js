import React, { useState, useEffect } from 'react';
import Header from './components/Nav'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Welcome from './components/Welcome'
import Posts from './components/Posts'
import Post from './components/Post'
import './App.css';
import { verifyUser } from './services/auth';
import { Route, Switch } from "react-router-dom";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    handleVerify()
  }, [])

  const handleVerify = async () => {
    const userData = await verifyUser();
    setCurrentUser(userData);
  }

  return (
    <div>
      <>
        <Header />
      </>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/post/:id" component={Post} />
      </Switch>
      <Footer />
    </div>
  )
  {/* currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      /> */}


}


