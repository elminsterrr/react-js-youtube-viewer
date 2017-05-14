import React from 'react';

const VideoListItem = (props) => {
  const clip = props.clip;
  const handleVideoSelect_0 = props.handleVideoSelect_1;
  const imageUrl = clip.snippet.thumbnails.default.url;
  return (
    <li onClick={() => handleVideoSelect_0(clip)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{clip.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
