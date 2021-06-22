import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import cats from "./mockCats"

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Footer/>
      </div>
    )
  }
}
