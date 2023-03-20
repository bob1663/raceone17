import React from "react";
import { images } from "../../constants";
import "./NewsPost.css";

const NewsPost = ({
  data: { imgNews, titleNews, newsTopic, newsDate, newsDescription },
}) => {

// ------------------------------------------------------------------------
const limitedDescription =
    newsDescription.split(" ").length > 30
      ? `${newsDescription.split(" ").slice(0, 30).join(" ")} [...]`
      : newsDescription;
// ------------------------------------------------------------------------
  return (
    <div className="app__newsPost">
      <div className="app__newsPost-image">
        <img src={imgNews} alt="News Image" />
      </div>
      <div className="app__newsPost-content">
        <div className="app__newsPost-content_info">
          <p>By</p>
          <p>RaceOne17</p>
          <p>In</p>
          <p>{newsTopic}</p>
          <p>Posted</p>
          <p>{newsDate}</p>
        </div>
        <h1>{titleNews}</h1>
        <p className="special-font">{limitedDescription}</p>
        <div className="app__newsPost-content_info-bottomContainer">
          <div className="app__newsPost-content_info-bottomContainer_shareContainer">
            <img src={images.ShareIcon} alt="ShareIcon" />
          </div>
          <p>
            <img src={images.ReadMoreIcon} alt="ReadMoreIcon" /> read more
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsPost;
