import React from 'react';

const VideoListItem = (props) => {
  // Wygenerowane zostaje 5 komponentów <VideoListItem />
  // poprzez helper map w <VideoList />.
  // Każde <VideoListItem />  ma osobne zmienne.
  // Za każdym razem const "clip" to obiekt zawierający
  // dane jedengo konkretnego filmu.
  const clip = props.clip; // or just ({clip}) in ES6
  const handleVideoSelect_0 = props.handleVideoSelect_1;
  const imageUrl = clip.snippet.thumbnails.default.url;
  return (
    // Tutaj po prostu przekazujemy w górę konkretny obiekt, który jest w zmiennej "clip"
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
