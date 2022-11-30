import './OrderInformation.css';

export const OrderInformation = () => {
  return (
    <div className="selected-product-in-order">
      <div className="q-of-products">1</div>
      <div className="product-name">Pan de muerto</div>
      <div className="cost-of-products">$50</div>
      <div className="delete-from-order"><img className="img-delete-product" src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png"/></div>
    </div>
  )
}
