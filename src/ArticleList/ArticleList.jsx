import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";

const ArticleList = ({props}) => {
  
  let displayContent;
  
  if (props.length === 0) {
    displayContent="No Data";
  }else{
      displayContent = (
          <ul>
              {props.map((article) => (
                  <li key={article.slug}><ArticleListItem article={article} /></li>
              ))}
          </ul>
      );
  }

  console.log({displayContent});

  return (
    {displayContent}
  );
};

export default ArticleList;