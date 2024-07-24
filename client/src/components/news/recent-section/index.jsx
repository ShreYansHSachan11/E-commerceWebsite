import React, { useState, useEffect } from "react";
import axios from "axios";
import './recent.css'
import Recentitem from './recentitem'
const Recent = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      var keyword ="wars";
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=${keyword}&apiKey=58b560b1b32f4181a5921914afc27b0b`
      );
      res.data.articles.length=4;
      setArticles(res.data.articles);
      console.log(res);
    };
    getArticles();
  }, []);
  
  return (
    <div className="recent-box">

    {articles.map((article)=>{
      return(
        <Recentitem
        title={article.title}
        description={article.description}
        url={article.url}
        urlToImage={article.urlToImage}
        author={article.author}
        />
        
        )
      })}
      </div>
   
);
};

export default Recent