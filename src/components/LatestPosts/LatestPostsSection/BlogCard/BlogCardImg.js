import React from 'react'

function BlogCardImg({ style, src, alt }) {
  return (
    <div className={style}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default BlogCardImg
