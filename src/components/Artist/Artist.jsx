import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import Tracks from "./Tracks";

const searchArtist = gql`
  query Artist($name: String!) {
    artist(name: $name) {
      id
      name
      image
      followers
      tracks {
        id
        name
        image
        previewUrl
      }
    }
  }
`;

const Artist = ({ name: searchName }) => {
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [playingPreviewUrl, setPlayingPreviewUrl] = useState(null);

  useEffect(() => {
    if (audio) {
      audio.pause();
    }
    // eslint-disable-next-line
  }, [searchName]);

  const { loading, error, data } = useQuery(searchArtist, {
    variables: { name: searchName },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <p style={{ color: "red" }}>ERROR</p>;

  if (!data.artist)
    return <p style={{ color: "red" }}>Artist: {searchName} not found</p>;

  const { image, name, followers, tracks } = data.artist;

  const playAudio = (previewUrl) => () => {
    if (audio) {
      audio.pause();
    }

    const audio1 = new Audio(previewUrl);
    setAudio(audio1);

    if (!playing) {
      audio1.play();

      setPlaying(true);
      setPlayingPreviewUrl(previewUrl);
    } else {
      audio1.pause();

      if (playingPreviewUrl === previewUrl) {
        setPlaying(false);
      } else {
        audio1.play();
        setAudio(audio1);
        setPlayingPreviewUrl(previewUrl);
      }
    }
  };

  return (
    <>
      <div>
        <h3>{name}</h3>
        <p>{followers} followers</p>

        <img
          src={image}
          alt="artist-profile"
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
            objectFit: "cover",
          }}
        />
      </div>

      <Tracks
        tracks={tracks}
        playAudio={playAudio}
        playing={playing}
        playingPreviewUrl={playingPreviewUrl}
      />
    </>
  );
};

export default Artist;
