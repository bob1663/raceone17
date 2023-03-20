import React, { useState, useEffect } from "react";
import { NewsPost } from "../../components";
import { data, images } from "../../constants";
import "./News.css";

const News = () => {
  const [visiblePosts, setVisiblePosts] = useState(4);

  const handleLoadMore = () => {
    setTimeout(() => {
      setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 4);
    }, 500);
  };

  // ----------------------------

  // ----------------------------

  return (
    <div className="app__news">
      <div className="app__news-posts">
        {data.news.slice(0, visiblePosts).map((news) => (
          <NewsPost data={news} key={news.titleNews} />
        ))}
      </div>
      <div className="app__news-button">
        {visiblePosts < data.news.length && (
          <button onClick={handleLoadMore}>
            {" "}
            <img src={images.LoadMoreIcon} alt="LoadMoreIcon" />
            LOAD MORE
          </button>
        )}
      </div>
    </div>
  );
};

export default News;
