import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
  const videoItems = props.videos.map((oneElObj) => {
    return (
      <VideoListItem
        handleVideoSelect_1={props.handleVideoSelect_2}
        key={oneElObj.etag}
        clip={oneElObj} />
    );
  });
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
