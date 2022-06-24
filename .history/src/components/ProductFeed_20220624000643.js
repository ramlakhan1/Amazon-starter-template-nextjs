import React from 'react'

function ProductFeed({products}) {
  return (
    <div>
  {products.map(({id, title, description}) => (
    <p>{products.title}</p>
  ))}
    </div>
  )
}

export default ProductFeed