import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './css/App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import data from './data.json';

class App extends Component {

  constructor(props){
    super(props);

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  render() {
    return (
      <div className="App">
        <Header data={data.main}/>
        <About data={data.main}/>
        <Portfolio data={data.portfolio}/>
        <Contact data={data.main}/>
        <Footer data={data.main}/>
      </div>
    );
  }
}

export default App;
