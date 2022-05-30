import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment } from './counterSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={ () => dispatch(increment()) }>+1</button>
      <span>{ count }</span>
      <button onClick={ () => dispatch(decrement()) }>-1</button>
    </div>
  )
};

export default Counter;
