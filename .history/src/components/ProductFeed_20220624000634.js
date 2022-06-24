import React from 'react'

function ProductFeed({products}) {
  return (
    <div>
  {products.map(({id}) => (
    <p>{products.title}</p>
  ))}
    </div>
  )
}

export default ProductFeed