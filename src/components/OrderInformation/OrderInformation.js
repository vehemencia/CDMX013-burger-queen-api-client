import './OrderInformation.css';

export const OrderInformation = ({ order }) => {
  const arrayOfOrder = order.items;
  return arrayOfOrder.map(individualProduct => (individualProduct.quantity > 0) ? <div className="selected-product-in-order"> <div className="q-of-products">{individualProduct.quantity}</div> <div className="product-name">{individualProduct.product.name}</div> <div className="cost-of-products">${individualProduct.product.price * individualProduct.quantity}</div><div className="delete-from-order"><img className="img-delete-product" src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png"/></div></div> : console.log('No cumple'))
}

// export const OrderInformation = ({order}) => {
//   console.log(order)
//   return (
//       <div className="selected-product-in-order">
//       <div className="q-of-products"></div>
//       <div className="product-name"></div>
//       <div className="cost-of-products">$</div>
//       <div className="delete-from-order"><img className="img-delete-product" src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png"/></div>
//     </div>
//       )
// }