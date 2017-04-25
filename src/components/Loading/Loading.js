import React from 'react'

import styles from './Loading.scss'

// A quick and simple message to assure people that the application is loading
const Loading = () => (
  <section className={styles.container} aria-labelledby='Loading content'>
    <div className={styles.dots}>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
    </div>
  </section>
)

export default Loading
