import React from 'react'
import { Route, Switch} from 'wouter';
import useToken from '../backend/useToken';
import Login from './pages/login';
import Personnel from './pages/personnel';
import Equipment from './pages/equipment';
import Livestock from './pages/livestock';
import Dashboard from './pages/dashboard';
import Finances from './pages/finances';
import Produce from './pages/produce';
import Medical from './pages/medical';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const { token, setToken } = useToken();

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
        <Route path="/Livestock">
          <Livestock/>
        </Route>
        <Route path="/Equipment">
          <Equipment/>
        </Route>
        <Route path="/Finances">
          <Finances/>
        </Route>
        <Route path="/Produce">
          <Produce/>
        </Route>
        <Route path="/Medical">
          <Medical/>
        </Route>
      </Switch>
  )
}

export default App