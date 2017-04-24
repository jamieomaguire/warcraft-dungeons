import React from 'react'

import styles from './Loading.scss'

// A quick and simple message to assure people that the application is loading
const Loading = () => (
  <section className={styles.container} aria-labelledby='Loading content'>
    <p>Loading the instances...</p>
  </section>
)

export default Loading
