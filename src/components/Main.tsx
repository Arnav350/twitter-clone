import React, { useEffect, useState } from "react";
import MainBox from "./MainBox";
import Post from "./Post";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

import "../App.css";

function Main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unSub = onSnapshot(collection(db, "posts"), (snapshot: any) => {
      setPosts(snapshot.docs.map((doc: any) => doc.data()));
    });

    return () => {
      unSub();
    };
  }, []);

  return (
    <div className="main">
      <div className="main__top">
        <h2 className="main__title">Home</h2>
        <div className="main__options">
          <h3 className="main__option">For you</h3>
          <h3 className="main__option">Following</h3>
        </div>
      </div>
      <MainBox />
      {posts.map((post: any, index: number) => (
        <Post
          key={index}
          avatar={post.avatar}
          displayName={post.displayName}
          verified={post.verified}
          username={post.username}
          text={post.text}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Main;
