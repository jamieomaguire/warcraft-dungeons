import React, { Component } from 'react'

import styles from './App.scss'
import Header from '../../components/Header/Header'
import Main from '../Main/Main'

export default class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <main className={styles.container}>
          <Main />
        </main>
      </div>
    )
  }
}
