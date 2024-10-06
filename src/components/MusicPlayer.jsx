import { useState } from "react";
import song from "../assets/secret_sign.flac";
import album from "../assets/album.jpg";
const MusicPlayer = () => {
  const [isPlaying, setisPlaying] = useState(false);

  function play() {
    new Audio(song).play();
  }

  return (
    <div className="border p-4 flex">
      <img src={album} className="w-16" />
      <button
        className="text-slate-500 hover:text-white duration-500 font-bold p-2"
        onClick={play}
      >
        play
      </button>
    </div>
  );
};

export default MusicPlayer;
