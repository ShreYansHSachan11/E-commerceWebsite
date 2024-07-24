import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "../newsitem/index";
import "./newslist.css";

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  function prevSlide() {
    let box = document.querySelector(".politicscontainer");
    let width = box.clientWidth;
    box.scrollLeft -= width;
  }
  function nextSlide() {
    let box = document.querySelector(".politicscontainer");
    let width = box.clientWidth;
    box.scrollLeft += width;
    console.log(width);
  }

  useEffect(() => {
    const getArticles = async () => {
      var keyword ="humanitarian aid";
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${keyword}&apiKey=34cd2f8a2a0d418692b57ea7e6c66cb5`
      );
      setArticles(response.data.articles);
      console.log(response);
    };

    getArticles();
  }, []);
  return (
    <div className="politicscontainer">
      <div className="goleft" onClick={prevSlide}>
        <div class="circlearrow circle1"></div>
        <div class="left-arrow"></div>
      </div>
      <div className="goright" onClick={nextSlide}>
        <div class="circlearrow circle1"></div>
        <div class="right-arrow"></div>
      </div>
      {articles.map((article) => {
        return (
          <NewsItem
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
            author={article.author}
          />
          






          
        );
      })}
    </div>
  );
};

export default NewsList;
