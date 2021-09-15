import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import Home from './pages/Home';
import Province from './pages/Province';
import { listen } from './app/listener';

function App() {
  React.useEffect(() => {
    listen();
  },[])

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/province/:id" component={Province}/>
          <Route path="/province" component={Province}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
