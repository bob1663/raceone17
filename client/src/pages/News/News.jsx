import React, { useState } from "react";
import { NewsPost } from "../../components";
import { data, images } from "../../constants";
import "./News.css";

const News = () => {
  const [visiblePosts, setVisiblePosts] = useState(4);

  const handleLoadMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 4);
  };

  return (
    <div className="app__news">
      <div className="app__news-posts">
        {data.news.slice(0, visiblePosts).map((news) => (
          <NewsPost data={news} key={news.titleNews} />
        ))}
      </div>
      <button onClick={handleLoadMore}>
        {" "}
        <img src={images.LoadMoreIcon} alt="LoadMoreIcon" />
        LOAD MORE
      </button>
    </div>
  );
};

export default News;
