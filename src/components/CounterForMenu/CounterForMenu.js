import './CounterForMenu.css';
import { Fragment } from 'react';

export const CounterForMenu = () => {
  return (<Fragment>
    <button className='minus-button'>-</button>
    <input className='counter-input'></input>
    <button className='plus-button'>+</button>
  </Fragment>)
}
