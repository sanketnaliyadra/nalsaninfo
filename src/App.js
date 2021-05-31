import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home.jsx';
import Services from './Services.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
  return(
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/"/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;