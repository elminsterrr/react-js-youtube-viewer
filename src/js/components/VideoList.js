import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
  //console.log('@Props', props); // videos: Array(5)
  // Lecimy przez obiekt props, iterujemy przez Array
  // videos, a dla każdego elementu zwracamy oneElObj
  // czyli pojedyńczy obiekt zawierający szczegółowe
  // dane nt. danego filmu
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
