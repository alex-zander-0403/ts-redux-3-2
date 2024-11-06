import React from 'react';
import Button from 'react-bootstrap/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { decrement, increment, incrementByAmount } from '../../redux/counter/counterSlice';

export default function CounterPage() {
  // достаем counter из store
  const counter = useAppSelector((store) => store.counter);
  // достаем dispatch c аргументом (increment/decrement)
  const dispatch = useAppDispatch();

  return (
    <div style={{ fontSize: 50 }}>
      {counter.value}
      <Button onClick={() => dispatch(increment())}>+1</Button>
      <Button onClick={() => dispatch(decrement())}>-1</Button>
      <Button onClick={() => dispatch(incrementByAmount(10))}>+10</Button>
    </div>
  );
}
