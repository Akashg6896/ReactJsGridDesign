import React, { Component } from 'react'
import Categories from '../Categories/Categories'
import EdyodaLogo from '../EdyodaLogo/EdyodaLogo'
import styles from './TopBar.module.css'
class TopBarContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className={styles.topBar}>
        <EdyodaLogo />
        <Categories />
      </div>
    )
  }
}
export default TopBarContainer
