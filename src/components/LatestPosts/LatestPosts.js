import React, { Component } from 'react'
import Header from './Header/Header'
import CategoriesTab from './CategoriesTab/CategoriesTab'
import LatestPostsSection from './LatestPostsSection/LatestPostsSection'
import styles from './LatestPosts.module.css'
class LatestPosts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      category: '',
    }
  }
  setCategory = (Category) => {
    this.setState(
      {
        category: Category,
      },
      () =>
        console.log(`LatestPost : this.state.category:${this.state.category}`)
    )
  }
  render() {
    return (
      <div className={styles.header}>
        <Header />
        <CategoriesTab filterHandler={this.setCategory} />
        <LatestPostsSection category={this.state.category} />
      </div>
    )
  }
}

export default LatestPosts
