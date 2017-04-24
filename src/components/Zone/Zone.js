import React from 'react'

import styles from './Zone.scss'

// Takes all the Warcraft zone data as props and displays the interesting parts

// Snippet adapted from W3 schools
const toggleAccordion = (event) => {
  event.target.classList.toggle(styles.active)
  let panel = event.target.nextElementSibling
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null
    panel.setAttribute('aria-expanded', 'false')
    panel.setAttribute('aria-hidden', 'true')
  } else {
    panel.style.maxHeight = panel.scrollHeight + 'px'
    panel.setAttribute('aria-expanded', 'true')
    panel.setAttribute('aria-hidden', 'false')
  }
}

const Zone = (props) => (
  <li className={styles.zone} aria-labelledby={props.name}>
    <button onClick={toggleAccordion} className={styles.accordion} type='button'>{props.name}</button>
    <div className={styles.panel} aria-expanded='false' aria-hidden='true'>
      <h3 className={styles.name}>{props.name}</h3>
      <p>{props.description ? props.description : 'No description available :('}</p>
      <p><span className={styles.stats}>Min Level:</span> {props.advisedMinLevel}</p>
      <p><span className={styles.stats}>Max Level:</span> {props.advisedMaxLevel}</p>
      <p><span className={styles.stats}>Number of players:</span> {props.numPlayers}</p>
      <p><span className={styles.stats}>Location:</span> {props.location.name}</p>
    </div>
  </li>
)

export default Zone
