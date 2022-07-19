import React, { Component } from 'react'
import styles from './BlogCard.module.css'
import BlogCardImg from './BlogCardImg'
import BlogCardTitle from './BlogCardTitle'
import BlogCardDesc from './BlogCardDesc'
import BlogCardAuthorDetails from './BlogCardAuthorDetails'
class BlogCard extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const BlogCardDetails = this.props.card
    // console.log(BlogCardDetails)
    return (
      <div className={styles.BlogCard}>
        <a href='#'>
          <BlogCardImg
            style={styles.BlogImgContainer}
            src={BlogCardDetails.image}
            alt={BlogCardDetails.title}
          />
          <div className={styles.BlogCardDesc}>
            <BlogCardTitle title={BlogCardDetails.title} />
            <BlogCardAuthorDetails
              style={styles.authorName}
              authorName={BlogCardDetails.authorName}
              date={BlogCardDetails.date}
            />
            <BlogCardDesc style={styles.desc} desc={BlogCardDetails.desc} />
          </div>
        </a>
      </div>
    )
  }
}

export default BlogCard
