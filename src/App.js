import React from 'react';

import { About, Footer, Header, Skills, Work } from './container';
import { NavBar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <NavBar />
    <Header />
    <About />
    <Skills />
    <Work />
    <Footer />
  </div>
);

export default App;