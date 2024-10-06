import song from "../assets/secret_sign.flac";
import { useState, useEffect, useRef } from "react";
import album from "../assets/album.jpg";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(song));

  const play = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const stop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  // Effect to handle stopping the audio when isPlaying changes
  useEffect(() => {
    if (!isPlaying) {
      stop();
    }
  }, [isPlaying]);

  return (
    <div className="border p-4 flex border-stone-500 gap-4 items-center rounded-md bg-zinc-900">
      <img src={album} className="w-16" />

      <button
        className="text-stone-500 hover:text-white duration-500 font-bold px-2 h-8 border-2 hover:bg-stone-400 border-stone-600 rounded-md bg-stone-700 hover:border-white"
        onClick={() => (isPlaying ? stop() : play())}
      >
        {isPlaying ? `❚❚` : `⏵`}
      </button>

      <div>
        <a
          href="https://open.spotify.com/track/1GuvP2zN3hTMTaf991GVc0?si=0bf70836b78547ad"
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // For security reasons
          className="text-stone-500 hover:text-white mt-2 block"
        >
          Listen on Spotify
        </a>
        <a
          href="https://open.spotify.com/user/in6odick8eugkoe0bjwsywg5s?si=fb4f45ac62604d9e"
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // For security reasons
          className="text-stone-500 hover:text-white mt-2 block"
        >
          zl's spotify
        </a>
      </div>
    </div>
  );
};

export default MusicPlayer;
