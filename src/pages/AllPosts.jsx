import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";

function AllPosts() {
  // const [posts, setPosts] = useState([]);

  const posts = useSelector((state) => state.post.allPosts);

  // useEffect(() => {
  //   appwriteService.getPosts([]).then((posts) => {
  //     if (posts) {
  //       setPosts(posts.documents);
  //     }
  //   });
  // }, []);
  return (
    <div className="w-full py-8 min-h-80">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4 ">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
