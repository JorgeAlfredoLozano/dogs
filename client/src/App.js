import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home.jsx';
import Detail from './components/Detail/Detail'
import DogCreate from './components/DogCreate/DogCreate'
import About from './components/About/About'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path = '/home' component={Home} />
          <Route path = '/dogs/:id' component={Detail} />
          <Route path = '/dog' component={DogCreate} />
          <Route path = '/about' component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
