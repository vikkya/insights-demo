import Navbar from './Navbar';
//import {Route, Router} from 'react-router-dom';
import Main from './Main';
import Footer from './Footer';
var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
class App extends React.Component {
  render() {
    return (
      <Router>
      <div className='app'>
       
        <Navbar />
        <Main />
        {/* <Popular /> */}
        <Footer />
      </div>
      </Router>
     
    )
  }
}

module.exports = App;