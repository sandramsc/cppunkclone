import React from 'react'

const CollectionCard = (id, name, traits, image) => {
  return (
    <div className='CollectionCard'>
        <img src={image} alt="" />
        <div className='details'></div>
        <div className='name'>
            {name} <div className='id'> •#{id}</div>
        </div>
        <div className='priceContainer'>
            <img src={weth} alt="" />
            <div className='price'>{traits[0] ?.value}</div>
        </div>
    </div>
  )
}

export default CollectionCard