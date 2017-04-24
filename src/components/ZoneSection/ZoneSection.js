import React from 'react'

import styles from './ZoneSection.scss'
import ZonesList from '../ZonesList/ZonesList'

// Renders a section with accessible labelling for screen readers. The ZonesList component takes an array of zones
const ZoneSection = ({ title, zones }) => (
  <section aria-labelledby={title}>
    <h3 className={styles.title}>{title}</h3>
    <ZonesList zones={zones} />
  </section>
)

export default ZoneSection
