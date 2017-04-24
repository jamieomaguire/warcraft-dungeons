import React, { Component } from 'react'
import axios from 'axios'

// import styles from './Expansions.scss'
import ZoneSection from '../../components/ZoneSection/ZoneSection'
import Loading from '../../components/Loading/Loading'

import { ENDPOINT } from '../../../config'

export default class Expansions extends Component {
  constructor (props) {
    super(props)
    this.state = {
      zones: []
    }
    this.fetchData = this.fetchData.bind(this)
  }
  // Use axios to grab the instance data from the blizzard api
  fetchData () {
    axios.get(ENDPOINT)
    .then(response => {
      let classicOnly = response.data.zones.filter(zone => {
        return zone.expansionId === 0
      })
      this.setState({
        zones: classicOnly
      })
    })
  }
  // Grab the data from the warcraft api once the component has mounted
  componentDidMount () {
    this.fetchData()
  }

  render () {
    // All of the dungeons
    const dungeons = this.state.zones.filter(zone => {
      return zone.isDungeon
    })
    // All of the raids
    const raids = this.state.zones.filter(zone => {
      return zone.isRaid
    })
    // Load the main content after the axios promise is resolved
    if (this.state.zones.length > 0) {
      return (
        <div>
          <ZoneSection title='Dungeons' zones={dungeons} />
          <ZoneSection title='Raids' zones={raids} />
        </div>
      )
    }
    // Provide a short message whilst the content is loading
    return (
      <Loading />
    )
  }
}
