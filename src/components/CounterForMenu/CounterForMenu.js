import './CounterForMenu.css';
import { Fragment } from 'react';

export const CounterForMenu = ({value, addOrRemoveProduct}) => {
  function changeQty(){
    console.log('Test')
  }
  return (<Fragment>
    <button className='minus-button' onClick={()=>addOrRemoveProduct('minus-button')}>-</button>
    <input className='counter-input' value={value} onChange={changeQty}/>
    <button className='plus-button' onClick={()=>addOrRemoveProduct('plus-button')}>+</button>
  </Fragment>)
}
