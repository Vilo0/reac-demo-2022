import { decrement, increment } from './counterSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';

const Counter = () => {
  const count = useAppSelector((state: any) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>Counter - reducers - Redux Toolkit</h1>
      <button onClick={ () => dispatch(increment()) }>+1</button>
      <span>{ count }</span>
      <button onClick={ () => dispatch(decrement()) }>-1</button>

      <hr />
    </div>
  )
};

export default Counter;
