import React from 'react'

// import styles from './ZonesList.scss'
import Zone from '../Zone/Zone'

// Map through each zone and return a Zone component using the zone id as a unique identifier and passing all the zone data down as props
const ZonesList = ({ zones }) => {
  // Sort the array alphabetically
  const alphabeticZones = zones.sort(function (a, b) {
    let zoneA = a.name.toUpperCase()
    let zoneB = b.name.toUpperCase()

    if (zoneA < zoneB) {
      return -1
    }
    if (zoneA > zoneB) {
      return 1
    }

    return 0
  })

  return (
    <ul>
      {alphabeticZones.map(zone => {
        return <Zone key={zone.id} {...zone} />
      })}
    </ul>
  )
}

export default ZonesList
