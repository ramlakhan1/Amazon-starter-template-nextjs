import React from 'react'

function ProductFeed({products}) {
  return (
    <div>
  {products.map(({id, title, description, category, image}) => (
    <p>{title}</p>
  ))}
    </div>
  )
}

export default ProductFeed