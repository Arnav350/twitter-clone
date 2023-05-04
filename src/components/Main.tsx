import React, { useEffect, useState } from "react";
import MainBox from "./MainBox";
import Post from "./Post";
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import "../App.css";

interface IPost {
  id: string;
  avatar: string;
  timestamp: Timestamp;
  text?: string;
  image?: string;
  replies: string[];
  liked: boolean;
}

type IPosts = IPost[];

function Main() {
  const [posts, setPosts] = useState<IPosts>([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const unSub = onSnapshot(
      q,
      (snapshot) => {
        const dbPosts: IPosts = [];
        snapshot.forEach((doc) => {
          dbPosts.push({ ...doc.data(), id: doc.id } as IPost);
        });
        setPosts(dbPosts);
      },
      (error) => {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    );

    return () => {
      unSub();
    };
  }, []);

  return (
    <div className="main">
      <div className="main__top">
        <h2 className="main__title">Home</h2>
        <div className="main__options">
          <h3 className="main__for-you">For you</h3>
          <h3 className="main__following">Following</h3>
        </div>
      </div>
      <MainBox />
      {posts.map((post: IPost, index: number) => (
        <Post
          key={index}
          id={post.id}
          avatar={post.avatar}
          text={post?.text}
          image={post?.image}
          replies={post.replies}
          liked={post.liked}
        />
      ))}
    </div>
  );
}

export default Main;
