import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  markers: Marker[];
  bpm: number;
  isPlaying: boolean;
}

interface Marker {
  time: number;
  type: string;
}

const initialState: AppState = {
  markers: [],
  bpm: 120,
  isPlaying: false,
};

const audioSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addMarker: (state, action: PayloadAction<Marker>) => {
      state.markers.push(action.payload);
    },
    setBPM: (state, action: PayloadAction<number>) => {
      state.bpm = action.payload;
    },
    togglePlayback: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const { addMarker, setBPM, togglePlayback } = audioSlice.actions;
export default audioSlice.reducer;
