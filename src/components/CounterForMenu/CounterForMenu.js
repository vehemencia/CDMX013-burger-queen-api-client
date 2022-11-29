import './CounterForMenu.css';
import { Fragment, useState } from 'react';

export const CounterForMenu = () => {
  const [count, setCount] = useState(0);
  console.log(count)
  return (<Fragment>
    <button className='minus-button' onClick={() => setCount(count-1)}>-</button>
    <input className='counter-input' value={count}/>
    <button className='plus-button' onClick={() => setCount(count+1)}>+</button>
  </Fragment>)
}
