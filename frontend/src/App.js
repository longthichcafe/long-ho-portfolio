import React from 'react'

import {Footer, Header, Projects, Skills} from './container'
import { NavBar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <Header />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App