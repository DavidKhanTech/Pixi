import React, { useState, useEffect } from 'react';
import Nav from './components/Nav'
import './App.css';
import { verifyUser } from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    handleVerify()
  }, [])

  const handleVerify = async () => {
    const userData = await verifyUser();
    setCurrentUser(userData);
  }

  return (
    <div className="App">
      <Nav
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />

    </div>
  );
}

export default App;
