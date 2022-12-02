import './CounterForMenu.css';
import { Fragment } from 'react';

export const CounterForMenu = (finalValue, finalFunction) => {
  return (<Fragment>
    <button className='minus-button' onClick={finalFunction}>-</button>
    <input className='counter-input' value={finalValue}/>
    <button className='plus-button' onClick={finalFunction}>+</button>
  </Fragment>)
}
