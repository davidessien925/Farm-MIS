//import { useState } from 'react'
import React from 'react'
import { useState } from 'react'
import { Route, Switch} from 'wouter';
import Login from './pages/login';
import Personnel from './pages/personnel'
import Dashboard from './pages/dashboard';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
      <Switch>
        <Route path="/">
          <Dashboard/>
        </Route>
        <Route path="/personnel">
          <Personnel/>
        </Route>
      </Switch>
  )
}

export default App