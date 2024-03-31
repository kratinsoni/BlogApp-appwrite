import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 shadow-lg shadow-gray-400 min-h-96 border-black hover:border-2 ">
        <div className="w-full justify-center flex mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl w-60 h-60"
          />
        </div>
        <div className="flex justify-center my-10">
          <h2 className="text-2xl font-bold font-poppins">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
