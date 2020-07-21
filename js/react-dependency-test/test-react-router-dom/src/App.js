import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/dashboard'><Dashboard /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <h2>Home</h2>
  )
}

function Dashboard() {
  return (
    <h2>Dashboard</h2>
  )
}

export default App;
