import React from 'react';
import Footer from './component/layout/footer/footer';
import Navbar from './component/layout/navbar/navbar';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import Content from './component/layout/content'; 
import AllJobs from './component/layout/alljobs/alljobs';
import Experjobs from './component/layout/experjobs/expirejobs';
import Filter from './component/layout/filter/filter';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      
      <Route exact path='/' component={Content}/>
      <Route exact path='/expirejobs' component={Content}/>
      <Route exact path='/' component={AllJobs}/>
      <Route exact path='/expirejobs' component={Experjobs}/>
      <Route exact path='/filter' component={Filter}/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
