import React, { Component } from 'react'
import styles from './Categories.module.css'
class Categories extends Component {
  render() {
    return (
      <div className={styles.categoriesContainer}>
        <p id={styles.Categories}>
          Explore Categories
          <select name='icon-dropdown' id={styles.DropdownIcon}></select>
        </p>

        <div className={styles.categoriesSideMenu}>
          <p id={styles.desc}>
            EdYoda is free learning and knowledge sharing platform for techies
          </p>
          <button className={styles.mainWebsiteButton}>
            Go to main Website
          </button>
        </div>
      </div>
    )
  }
}

export default Categories
