import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  RiImage2Line,
  RiFileGifLine,
  RiListUnordered,
  RiEmotionHappyLine,
  RiCalendarEventLine,
  RiMapPinLine,
} from "react-icons/ri";

function MainBox() {
  const [message, setMessage] = useState("");
  const [url, setUrl] = useState("");

  function toggleImg(event: any) {
    event.preventDefault();
    const image = document.querySelector<HTMLInputElement>(".main__url")?.style;
    const links = document.querySelector<HTMLDivElement>(".main__links")?.style;

    if (image && links) {
      image.display = "block";
      links.display = "none";
    }
  }

  async function sendTweet(event: any) {
    const image = document.querySelector<HTMLInputElement>(".main__url")?.style;
    const links = document.querySelector<HTMLDivElement>(".main__links")?.style;
    event.preventDefault();

    const num = Math.floor(Math.random() * (256 - 64) + 64);

    await addDoc(collection(db, "posts"), {
      avatar: `https://picsum.photos/${num}`,
      displayName: "Arnav",
      image: url,
      text: message,
      username: "arnavpatel",
      verified: true,
    });

    setMessage("");
    setUrl("");

    if (image && links) {
      image.display = "none";
      links.display = "flex";
    }
  }

  return (
    <form className="main__box" onSubmit={(event: any) => sendTweet(event)}>
      <div className="main__personal">
        <img src="https://picsum.photos/128" alt="" className="main__avatar" />
        <input
          type="text"
          placeholder="What's happening?"
          value={message}
          className="main__input"
          onChange={(event: any) => setMessage(event.target.value)}
        />
      </div>
      <div className="main__buttons">
        <input
          type="text"
          placeholder="Enter Image URL"
          value={url}
          className="main__url"
          onChange={(event: any) => setUrl(event.target.value)}
        />
        <div className="main__links" onClick={(event: any) => toggleImg(event)}>
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
