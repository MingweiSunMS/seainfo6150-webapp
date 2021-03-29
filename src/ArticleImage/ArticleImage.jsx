import React from "react"
import style from "./ArticleImage.module.css";

const ArticleImage = ({url, title}) => {
    return (<img className={style.img} src={url} title={title}/>);
}

export default ArticleImage;