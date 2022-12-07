import './ProductsInMenu.css';
import ProductItem from './ProductItem.js';

export const ProductsInMenu = ({ data, handleAddItem }) => {
  return (
    data.map(individualProduct =>
      <div className="individual-product" key={individualProduct.id}>
        <div className="name-of-product">{individualProduct.name}</div>
        <div className="price-of-product">${individualProduct.price} <button onClick={() => handleAddItem()}>HOLA</button></div>
        <div className="product-counter"> <ProductItem key={data.id} individualProduct={individualProduct}/> </div>
      </div>)
  )
}
