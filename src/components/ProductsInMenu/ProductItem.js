import { useEffect, useState } from 'react';

export default function ProductItem({handleAddItem, individualProduct}) {
  const [productQuantity, setProductQuantity] = useState(0);
  useEffect(() => {
    console.log('modifique quantity');
    handleAddItem({quantity:productQuantity, product: individualProduct})
  }, [productQuantity])
  
  const handleQuantity = (typeOfOperation) => {
    if (typeOfOperation == 'sum') {
      setProductQuantity((state) => state + 1)
    } else if (productQuantity > 0) {
      setProductQuantity((state) => state - 1)
    }
  }
  return (
        <>
        <button className='minus-button' onClick={() => handleQuantity('substract')}>-</button>
        <input className='counter-input' value={productQuantity} onChange={setProductQuantity} />
        <button className='plus-button' onClick={() => handleQuantity('sum')}>+</button>
        </>
  )
}
