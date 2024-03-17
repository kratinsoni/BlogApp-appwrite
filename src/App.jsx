import { useDispatch } from "react-redux";
import "./App.css";
import React, { useEffect, useState } from "react";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice.js";
import { Header, Footer } from "./components/index.js";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <>
      <div className="min-h-screen flex-wrap content-between bg-gray-400">
        <div className="block w-full">
          <Header />
          TODO: <Outlet />
          <Footer />
        </div>
      </div>
    </>
  ) : null;
}

export default App;
