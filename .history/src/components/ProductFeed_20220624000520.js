import React from 'react'

function ProductFeed({products}) {
  return (
    <div>
  {products.map((products) => (
    <p>{products}</p>
  ))}
    </div>
  )
}

export default ProductFeed