import React, { useEffect } from "react";
import { fetchUsers } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store";
import useUser from "../hooks/useUser";

const User = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useUser();

  useEffect(() => {
    console.log(user);
  }, []);

  const onClickHandler = async () => {
    const user = await dispatch(fetchUsers()).unwrap();
    console.log("user:", user);
  };
  return (
    <>
      <button
        onClick={() => {
          onClickHandler();
        }}
      >
        fetch User
      </button>
    </>
  );
};

export default User;
