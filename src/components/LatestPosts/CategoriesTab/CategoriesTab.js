import React from 'react'
import styles from './CategoriesTab.module.css'
class CategoriesTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        'All',
        'Artificial Intelligence',
        'Cloud Computing',
        'DevOps',
        'Programming Languages',
        'Mobile Application Development',
        'Technology and Tools',
        'Get a Job in a Tech Company',
        'Others',
      ],
      Category: '',
    }
  }
  filterHandler = (e) => {
    this.setState(
      {
        Category: e.target.innerHTML,
      },
      () => {
        let buttonList = Array.from(document.querySelectorAll('#categories'))
        // console.log(buttonList)
        for (let button of buttonList) {
          button.className = styles.categoriesTab
        }
        e.target.className = styles.active
        // console.log(e)
        this.props.filterHandler(e.target.innerHTML)
      }
    )
    // return this.state.categories.filter(
    //   (category) => e.target.value === category
    // )
  }
  render() {
    let { categories } = this.state
    // let buttonStyle = this.state.clicked ? styles.active : styles.categoriesTab
    return (
      <div className={styles.categoriesContainer}>
        {categories.map((categoryTab) => (
          <button
            className={styles.categoriesTab}
            onClick={this.filterHandler}
            key={categoryTab}
            id={`categories`}
          >
            {categoryTab}
          </button>
        ))}
      </div>
    )
  }
}
export default CategoriesTab
