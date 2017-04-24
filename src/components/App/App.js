import React from 'react'

import styles from './App.scss'
import Header from '..//Header/Header'
import Main from '../../containers/Main/Main'

const App = () => (
  <div>
    <Header />
    <main className={styles.container}>
      <Main />
    </main>
  </div>
)

export default App
