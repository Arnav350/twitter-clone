import React from "react";

interface IProps {
  url: string;
  title: string;
  source: string;
  image: string;
}

function Article(props: IProps) {
  return (
    <a href={props.url} target="_blank" rel="noreferrer" className="article">
      <div className="article__text">
        <p className="article__para">Technology · Trending</p>
        <h5 className="article__title">{props.title}</h5>
        <p className="article__para">{props.source}</p>
      </div>
      <img src={props.image} alt="" className="article__image" />
    </a>
  );
}

export default Article;
