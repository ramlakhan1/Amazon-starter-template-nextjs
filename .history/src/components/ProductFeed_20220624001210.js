import React from 'react'
import Product from './Product'

function ProductFeed({products}) {
  return (
    <div>
  {products.map(({id, title,price, description, category, image}) => (
    <Product
    ket={id}
    id={id}
    
    />
  ))}
    </div>
  )
}

export default ProductFeed