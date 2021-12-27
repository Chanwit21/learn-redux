import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, reset, step } from '../actions/countAction';

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  // console.log(`count`, count);

  return (
    <div style={{ margin: '0 auto', width: '50%', textAlign: 'center' }}>
      <h1>Counter App</h1>
      <h2>{count.current}</h2>
      <input type='text' placeholder='Enter step' value={value} onChange={(e) => setValue(+e.target.value)} />
      {/* <button style={{ margin: '0.3vw' }} onClick={() => dispatch({ type: 'INCREMENT' })}>
        Increase
      </button>
      <button style={{ margin: '0.3vw' }} onClick={() => dispatch({ type: 'DECREMENT' })}>
        Decrease
      </button>
      <button style={{ margin: '0.3vw' }} onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button> */}
      <button style={{ margin: '0.3vw' }} onClick={() => dispatch(increase())}>
        Increase
      </button>
      <button style={{ margin: '0.3vw' }} onClick={() => dispatch(decrease())}>
        Decrease
      </button>
      <button style={{ margin: '0.3vw' }} onClick={() => dispatch(reset())}>
        Reset
      </button>
      <button style={{ margin: '0.3vw' }} onClick={() => dispatch(step(value))}>
        Step
      </button>
    </div>
  );
}

export default Counter;
