import Image from 'next/image'
import React from 'react'

function Product({id, title,price, description, category, image}) {
  return (
    <div>
        <p>{category}</p>
        <Image src='' />
    </div>
  )
}

export default Product