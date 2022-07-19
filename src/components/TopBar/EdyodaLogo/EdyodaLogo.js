import React, { Component } from 'react'
import styles from './EdyodaLogo.module.css'
class EdyodaLogo extends Component {
  render() {
    return (
      <div className={styles.logoContainer}>
        <div className={styles.logo}>edyoda</div>
        <p id={styles.stories}>stories</p>
      </div>
    )
  }
}

export default EdyodaLogo
