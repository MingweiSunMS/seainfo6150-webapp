import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>
      {/* add extra html with javascript attributes here */}
      <header>
        <h1>{props.article.title}</h1>
        <address>{props.article.author} (<a href={"mailto:" + props.article.authorEmail}>{props.article.authorEmail}</a>)
        <br/>
        </address>
        <time dateTime={props.article.timeStamp}/>
        <br/>
        <img src={props.article.image._url} alt={props.article.title}/>
      </header>

      <HTMLText text={props.article.text}/>
    </article>
  );
};

export default DynamicArticle;
