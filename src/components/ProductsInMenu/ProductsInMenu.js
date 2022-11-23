import './ProductsInMenu.css';
import { CounterForMenu } from '../CounterForMenu/CounterForMenu';

export const ProductsInMenu = () => {
  return (
    <div className="individual-product">
        <div className="name-of-product">Pan con queso</div>
        <div className="price-of-product">$30</div>
        <div className="product-counter">{CounterForMenu()}</div>
    </div>
  )
}
