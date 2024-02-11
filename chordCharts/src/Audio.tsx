import { useState, useEffect } from "react";
import * as Tone from "tone";
import { useDispatch, useSelector } from "react-redux";
import { togglePlayback } from "./redux/slices/audioSlice.js";
import { RootState } from "./redux/store.ts";

function Audio() {
  const [player, setPlayer] = useState<Tone.Player | null>(null);
  const dispatch = useDispatch();
  const { isPlaying } = useSelector((state: RootState) => state.audio);

  useEffect(() => {
    const newPlayer = new Tone.Player({
      url: "/[ytmp3.lat]Big_Thief_-_Shark_Smile_Official_Audio_.mp3?url",
      autostart: false,
    }).toDestination();

    setPlayer(newPlayer);

    return () => {
      newPlayer.dispose();
    };
  }, []);

  useEffect(() => {
    if (player) {
      if (isPlaying) {
        // Use a user-triggered event to start the audio context
        Tone.start().then(() => {
          player.start();
          console.log("player.start triggered");
        });
      } else {
        player.stop();
        console.log("player.stop triggered");
      }
    }
  }, [isPlaying, player]);

  const handleTogglePlayback = () => {
    console.log("clicked play/pause");
    dispatch(togglePlayback());
  };

  return (
    <div>
      <button onClick={handleTogglePlayback}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}

export default Audio;
