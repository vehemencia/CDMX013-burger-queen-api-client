import './CounterForMenu.css';
import { Fragment } from 'react';

export const CounterForMenu = () => {
  return (<Fragment>
    <button className='minus-button'>-</button>
    <input className='counter-input' type='number'></input>
    <button className='plus-button'>+</button>
  </Fragment>)
}
