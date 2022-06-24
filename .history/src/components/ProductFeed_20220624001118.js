import React from 'react'

function ProductFeed({products}) {
  return (
    <div>
  {products.map(({id, title,price, description, category, image}) => (
    <Product
  ))}
    </div>
  )
}

export default ProductFeed