import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import DynamicArticle from "./DynamicArticle/DynamicArticle.jsx";
import { isEmpty } from "lodash";
import ArticleList from "./ArticleList/ArticleList.jsx"

function App() {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("http://demo1390455.mockable.io/articles");
      console.log("Downloaded the article from the link");
      const responseJson = await response.json();
      setFetchedData(responseJson);
      console.log("FetchedData set");
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? null : (
    <div className="App">
      <h2>This is the Article List</h2>
      <Switch>
        <Route exact path="/articlelist">    
        <ArticleList props={Object.values(fetchedData)}/>
        </Route>
        <Route path="/articlelist/:slug" render={({match}) => <DynamicArticle article={fetchedData[match.params.slug]} />}/>
      </Switch>
    </div>
  );
}

export default App;
