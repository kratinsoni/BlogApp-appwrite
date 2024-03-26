import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import authService from "./appwrite/auth";
import appwriteService from "./appwrite/config.js";
import { login, logout } from "./store/authSlice.js";
import { Header, Footer } from "./components/index.js";
import { Outlet } from "react-router-dom";
import { removePosts, storePosts } from "./store/postSlice.js";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
          appwriteService.getPosts([]).then((posts) => {
            if (posts) {
              dispatch(storePosts(posts.documents));
            }
          });
        } else {
          dispatch(logout());
          dispatch(removePosts());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <>
      <div className="min-h-screen flex-wrap content-between bg-gray-400">
        <div className="block w-full">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  ) : null;
}

export default App;
