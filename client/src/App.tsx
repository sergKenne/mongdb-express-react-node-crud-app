import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './pages/About';
import AddUser from './pages/AddUser';
import Contact from './pages/Contact';
import Detail from './pages/Detail';
import EditUser from './pages/EditUser';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';

const App = () => {
  return (
      <div className="app">
          <Navbar />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/about" component={About} />
              <Route exact path="/add" component={AddUser} />
              <Route exact path="/edit" component={EditUser} />
              <Route exact path="/user/:1" component={Detail} />
              <Route component={ErrorPage} />
          </Switch>
      </div>
  );
}

export default App;
