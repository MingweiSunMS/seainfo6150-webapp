import React from "react";
import HTMLText from "../HTMLText/HTMLText.jsx";
import { Link } from "react-router-dom";
import style from "./DynamicArticle.module.css"

const DynamicArticle = (props) => {
  return (
    <div>
      <Link to="/articlelist" className={style.link}>Back</Link>
      <article>
        <div className={style.content}>
          <h1>{props.article.title}</h1>
          <address>
            by {props.article.author} (
            <a href={`mailto:${props.article.authorEmail}`}>
              {props.article.authorEmail}
            </a>
            )
            <br />
          </address>
          <time dateTime={props.article.timeStamp}>
            {props.article.displayDate}
          </time>
        <HTMLText text={props.article.text} />
        </div>
      </article>
    </div>
  );
};

export default DynamicArticle;
