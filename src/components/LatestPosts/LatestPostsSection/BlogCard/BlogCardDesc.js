import React from 'react'

function BlogCardDesc({ style, desc }) {
  return (
    <div className={style}>
      <p>
        {desc}
        <span>...</span>
      </p>
    </div>
  )
}

export default BlogCardDesc
