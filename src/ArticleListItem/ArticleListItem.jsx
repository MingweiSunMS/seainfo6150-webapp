import React, {useState} from "react";
import PropTypes from "prop-types";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx"
import {Link} from "react-router-dom"
import style from "./ArticleListItem.module.css"

const ArticleListItem = (props) => {
  let buttonText="Show More"
  const [showContent, isShowContent] = useState(false);
  const onClick = () =>{
    isShowContent(!showContent);
  }
  if(showContent){
    buttonText="Show Less";
  }

  return (
      <article className={style.content}>
        <Link to={'/articlelist/'+props.article.slug}>
          <h2 className={style.title}>{props.article.title}</h2>
        </Link>
        {showContent && (
          <React.Fragment>
            <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time><b></b>
            <p>{props.article.shortText}</p><b></b>
          </React.Fragment>)}
        <ArticleTextToggleButton buttonText={buttonText} onClick={onClick}/>
      </article>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleListItem;
