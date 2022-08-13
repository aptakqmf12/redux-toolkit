import React from "react";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByNumber } from "../features/counter/counterSlice";

const useCounter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

  const incrementCount = () => {
    dispatch(increment());
  };
  const incrementCountByNumber = (num: number) => {
    dispatch(incrementByNumber(num));
  };

  return {
    count,
    incrementCount,
    incrementCountByNumber,
  };
};

export default useCounter;
