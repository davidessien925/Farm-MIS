import React from 'react'
import { Route, Switch, Link} from 'wouter';
import useToken from '../backend/useToken';
import Login from './pages/login';
import Personnel from './pages/personnel';
import Livestock from './pages/livestock';
import Dashboard from './pages/dashboard';

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
      </Switch>
  )
}

export default App