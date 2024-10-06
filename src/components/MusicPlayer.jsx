import { useState } from "react";
import song from "../assets/secret_sign.flac";
const MusicPlayer = () => {
  const [isPlaying, setisPlaying] = useState(false);

  function play() {
    new Audio(song);
  }
  return (
    <div className="">
      <button onClick={play}>play</button>
    </div>
  );
};

export default MusicPlayer;
