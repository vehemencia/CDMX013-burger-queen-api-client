import './ProductsInMenu.css';
import { CounterForMenu } from '../CounterForMenu/CounterForMenu';

export const ProductsInMenu = (Product) => {
  return (
    <div className="individual-product">
        <div className="name-of-product">{Product}</div>
        <div className="price-of-product">$30</div>
        <div className="product-counter">{CounterForMenu()}</div>
    </div>
  )
}
