import React from "react"
import Style from "./ArticleTextToggleButton.module.css"

const ArticleTextToggleButton = ({buttonText,onClick}) =>{
    return <button type="button" className={Style.articleTextToggleButtonStyle} onClick={onClick}>{buttonText}</button>
};
export default ArticleTextToggleButton;