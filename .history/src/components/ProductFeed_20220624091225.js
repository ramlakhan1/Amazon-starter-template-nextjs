import React from 'react'
import Product from './Product'

function ProductFeed({products}) {
  return (
    <div className="grid grid-flow-row">
  {products.map(({id, title,price, description, category, image}) => (
    <Product
    ket={id}
    id={id}
    title={title}
    price={price}
    description={description}
    category={category}
    image={image}
    />
  ))}
    </div>
  )
}

export default ProductFeed