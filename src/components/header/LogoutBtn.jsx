import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth.js";
import { logout } from "../../store/authSlice.js";
import { removePosts } from "../../store/postSlice.js";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
      dispatch(removePosts());
    });
  };

  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:bg-black hover:text-white rounded-xl text-lg font-semibold mx-4"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
