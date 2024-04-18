import React from 'react';

const YoutubePlayer = ({ videoId }) => {
  return (
    <div className="youtube-player">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubePlayer;
