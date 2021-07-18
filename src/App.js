import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import './scss/style.scss';
import Aaws from './views/Aaws/Aaws';
import Awos from './views/Awos/Awos';
import Aws from './views/Aws/Aws';
import Ceilometer from './views/Ceilometer/Ceilometer';
import Dashboard from './views/dashboard/Dashboard';
// import LoginPage from './views/LoginPage/LoginPage';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const LoginPage = React.lazy(() => import('./views/LoginPage/LoginPage'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route  exact path="/LoginPage" name="Login page" render={props => <LoginPage {...props}/>} />
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>}/>
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
