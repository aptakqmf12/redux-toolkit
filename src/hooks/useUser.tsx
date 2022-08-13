import React from "react";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByNumber } from "../features/counter/counterSlice";

const useUser = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  return {
    user,
  };
};

export default useUser;
