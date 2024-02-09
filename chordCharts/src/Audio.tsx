import * as Tone from "tone";
import { useDispatch, useSelector } from "react-redux";
import {
  addMarker,
  setBPM,
  togglePlayback,
} from "./redux/slices/audioSlice.js"; // Adjust the import path based on your project structure
import { RootState } from "./redux/store.ts";

function Audio() {
  const dispatch = useDispatch();
  const { isPlaying } = useSelector((state: RootState) => state.audio);

  const handleTap = () => {
    const currentTime = Tone.now();
    dispatch(addMarker({ time: currentTime, type: "section" }));
  };

  const handleTapTempo = () => {
    const analyzedBPM = 120; // Replace this with your tempo analysis logic
    dispatch(setBPM(Math.round(analyzedBPM)));
  };

  const handleTogglePlayback = () => {
    dispatch(togglePlayback());

    if (isPlaying) {
      Tone.Transport.start();
    } else {
      Tone.Transport.stop();
    }
  };

  return (
    <div>
      <button onClick={handleTogglePlayback}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button onClick={handleTapTempo}>Tap Tempo</button>
      <button onClick={handleTap}>Add Section Marker</button>
      {/* Display markers, bpm, or other relevant information */}
    </div>
  );
}

export default Audio;
