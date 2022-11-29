import './CounterForMenu.css';
import { Fragment } from 'react';

//let quantityOfProducts = 0;
// function increment(){
//   quantityOfProducts++
// }

export const CounterForMenu = () => {
  return (<Fragment>
    <button className='minus-button'>-</button>
    <input className='counter-input' type='number' value='0'></input>
    <button className='plus-button' >+</button>
  </Fragment>)
}
