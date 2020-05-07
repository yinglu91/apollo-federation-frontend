import React from "react";
import "./artist.css";

const  Tracks = ({ tracks, playing, playingPreviewUrl, playAudio }) => {
  const trackIcon = (track) => {
    if (!track.previewUrl) {
      return <span>N/A</span>;
    }

    if (playing && playingPreviewUrl === track.previewUrl) {
      return <span>| |</span>;
    }

    return <span>&#9654;</span>;
  };

  return (
    <div>
      {tracks.map((track, index) => {
        const { name, image, previewUrl } = track;

        return (
          <div
            key={name + index}
            onClick={playAudio(previewUrl)}
            className="track"
          >
            <img src={image} alt="track-image" className="track-image" />
            <p className="track-text">{name}</p>
            <p className="track-icon">{trackIcon(track)}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Tracks;
