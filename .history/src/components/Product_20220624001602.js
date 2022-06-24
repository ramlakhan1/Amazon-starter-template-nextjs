import Image from 'next/image'
import React from 'react'

function Product({id, title,price, description, category, image}) {
  return (
    <div>
        <p>{category}</p>
        <Image src={image} hight={200} />
    </div>
  )
}

export default Product