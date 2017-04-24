import React from 'react'

import styles from './Zone.scss'

// Takes all the Warcraft zone data as props and displays the interesting parts

// aria-expanded='false' - aria-hidden='true'
// aria-expanded='true' - aria-hidden='false'

// Snippet taken from W3 schools
const toggleAccordion = (event) => {
  event.target.classList.toggle(styles.active)
  let panel = event.target.nextElementSibling
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null
  } else {
    panel.style.maxHeight = panel.scrollHeight + 'px'
  }
}

const Zone = (props) => (
  <li className={styles.zone} aria-labelledby={props.name}>
    <button onClick={toggleAccordion}className={styles.accordion} type='button'>{props.name}</button>
    <div className={styles.panel}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>Min Level: {props.advisedMinLevel}</p>
      <p>Max Level: {props.advisedMaxLevel}</p>
      <p>Number of plays: {props.numPlayers}</p>
      <p>Location: {props.location.name}</p>
    </div>
  </li>
)

export default Zone
