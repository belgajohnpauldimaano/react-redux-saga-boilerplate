import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import store from './store'

import Loadable from './HOC/Loadable'

const DataInfo = Loadable({
  loader: () => import(`./pages/DataInfo/DataInfo`)
})

const Home = Loadable({
  loader: () => import(`./pages/Home`)
})

class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <Router>
          <div>
            <Link to="/">Home</Link>
            <Link to="/data-info">Data Info</Link>

            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/data-info' component={DataInfo} />
            </Switch>
          </div>
        </Router>

      </Provider>
    )

  }
}

export default App;
