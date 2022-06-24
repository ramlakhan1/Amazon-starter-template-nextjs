import React from 'react'

function ProductFeed({products}) {
  return (
    <div>
  {products.map(({}) => (
    <p>{products.title}</p>
  ))}
    </div>
  )
}

export default ProductFeed