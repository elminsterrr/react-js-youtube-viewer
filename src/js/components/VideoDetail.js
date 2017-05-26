import React from 'react';

const VideoDetail = (props) => {
  const chosenClip = props.chosenClip;
  const userQuery = props.userQuery;

  if (userQuery === '') {
    return <div className="info">Please enter your query to search YouTube.</div>;
  } else if (!chosenClip) {
    return <div className="info">No results for: {userQuery}</div>;
  }

  const chosenClipId = chosenClip.id.videoId;
  const url = `https://www.youtube.com/embed/${chosenClipId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>{chosenClip.snippet.title}</div>
        <div>{chosenClip.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
