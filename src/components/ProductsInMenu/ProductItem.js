import { useEffect, useState } from 'react';

export default function ProductItem({individualProduct}) {
    const [quantity, setQuantity] =useState(0)
    useEffect(()=>{
        console.log('modifique quantity');
    },[quantity])
    const handleQuanty=(type)=>{
      if(type=='suma'){
        setQuantity((state)=>state+1)
      }else if(quantity>0){
        setQuantity((state)=>state-1)
      }
    }
  return (
    <div className="individual-product" key={individualProduct.id}>
    <div className="name-of-product">{individualProduct.name}</div>
    <div className="price-of-product">${individualProduct.price}</div>
    <div className="product-counter">
      <button className='minus-button' onClick={()=>handleQuanty('resta')}>-</button>
      <input className='counter-input' value={quantity}/>
      <button className='plus-button' onClick={()=>handleQuanty('suma')}>+</button></div>
  </div>
  )
}
