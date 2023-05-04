import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {
  RiImage2Line,
  RiFileGifLine,
  RiListUnordered,
  RiEmotionHappyLine,
  RiCalendarEventLine,
  RiMapPinLine,
} from "react-icons/ri";

function MainBox() {
  const [message, setMessage] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [showUrl, setShowUrl] = useState<boolean>(false);

  function toggleUrl(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    setShowUrl(true);
  }

  async function sendTweet(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowUrl(false);

    const num = Math.floor(Math.random() * (256 - 64) + 64);

    await addDoc(collection(db, "posts"), {
      avatar: `https://picsum.photos/${num}`,
      ...(url && { image: url }),
      ...(message && { text: message }),
      timestamp: serverTimestamp(),
      replies: [],
      liked: false,
    });

    setMessage("");
    setUrl("");
  }

  return (
    <form
      className="main__box"
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => sendTweet(event)}
    >
      <div className="main__personal">
        <img src="https://picsum.photos/256" alt="" className="main__avatar" />
        <input
          type="text"
          placeholder="What's happening?"
          value={message}
          className="main__input"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setMessage(event.target.value)
          }
        />
      </div>
      <div className="main__buttons">
        <input
          type="text"
          placeholder="Enter Image URL"
          value={url}
          className="main__url"
          style={showUrl ? {} : { display: "none" }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setUrl(event.target.value)
          }
        />
        <div
          className="main__links"
          style={showUrl ? { display: "none" } : {}}
          onClick={(event: React.MouseEvent<HTMLDivElement>) =>
            toggleUrl(event)
          }
        >
          <a href="/" className="main__link">
            <RiImage2Line className="main__icon" />
          </a>
          <a href="/" className="main__link">
            <RiFileGifLine className="main__icon" />
          </a>
          <a href="/" className="main__link">
            <RiListUnordered className="main__icon" />
          </a>
          <a href="/" className="main__link">
            <RiEmotionHappyLine className="main__icon" />
          </a>
          <a href="/" className="main__link">
            <RiCalendarEventLine className="main__icon" />
          </a>
          <a href="/" className="main__link">
            <RiMapPinLine className="main__icon" />
          </a>
        </div>
        <button type="submit" className="main__tweet">
          Tweet
        </button>
      </div>
    </form>
  );
}

export default MainBox;
