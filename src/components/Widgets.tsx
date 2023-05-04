import React, { useEffect, useState } from "react";
import Article from "./Article";
import Person from "./Person";
import { BsSearch, BsThreeDots } from "react-icons/bs";
import "../App.css";

function Widgets() {
  const [articles, setArticles] = useState<any>();
  const [people, setPeople] = useState<any>();

  const randomNum = Math.floor(Math.random() * 8);

  useEffect(() => {
    getWidgets();
  }, []);

  async function getWidgets() {
    await fetch(
      "https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));

    await fetch("https://randomuser.me/api/?results=10&nat=us&inc=name,picture")
      .then((res) => res.json())
      .then((data) => setPeople(data.results));
  }

  console.log(people);

  return (
    <div className="widgets">
      <div className="widgets__search">
        <BsSearch className="widgets__icon" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="widgets__input"
        />
      </div>
      <div className="widgets__box">
        <h1 className="widgets__title">What's happening</h1>
        {articles
          ?.slice(randomNum, randomNum + 3)
          .map((article: any, index: number) => (
            <Article
              key={index}
              url={article.url}
              title={article.title}
              source={article.source.name}
              image={article.urlToImage}
            />
          ))}
      </div>
      <div className="widgets__box">
        <h1 className="widgets__title">Who to follow</h1>
        {people
          ?.slice(randomNum, randomNum + 3)
          .map((person: any, index: number) => (
            <Person
              key={index}
              first={person.name.first}
              last={person.name.last}
              image={person.picture.thumbnail}
            />
          ))}
      </div>
      <div className="widgets__footer">
        <ul className="widgets__list">
          <li className="widgets__text">Terms of Service</li>
          <li className="widgets__text">Privacy Policy</li>
          <li className="widgets__text">Cookies Policy</li>
        </ul>
        <ul className="widgets__list">
          <li className="widgets__text">Accessibility</li>
          <li className="widgets__text">Ads info</li>
          <li className="widgets__text">
            More
            <BsThreeDots />
          </li>
          <li className="widgets__text">© 2023 X Corp.</li>
        </ul>
      </div>
    </div>
  );
}

export default Widgets;
