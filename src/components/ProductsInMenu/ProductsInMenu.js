import './ProductsInMenu.css';
import './CounterForMenu.css';
import ProductItem from './ProductItem';

export const ProductsInMenu = ({data}) => {
  return (<>
    {data.map((individualProduct, index) => <ProductItem key={index} individualProduct={individualProduct} />
      
    )}
  </>
  )
}