import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RLink
} from 'react-router-dom'
import Link from './components/Link'
import Home from './pages/Home'

function App() {
  const FancyLink = React.forwardRef<HTMLAnchorElement>((props, ref) => (
    <Link ref={ref} {...props}>{props.children}</Link>
  ))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link href="https://reactjs.org">React Home</Link>
      </header>

      <Router>
        <div>
          <ul>
            <li>
              <RLink to="/" component={FancyLink}>Home</RLink>
            </li>
          </ul>

          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
