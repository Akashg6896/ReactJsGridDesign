import React from 'react'

function BlogCardAuthorDetails({ style, authorName, date }) {
  return (
    <>
      <span className={style}>{authorName} |</span>
      <span>{date}</span>
    </>
  )
}

export default BlogCardAuthorDetails
