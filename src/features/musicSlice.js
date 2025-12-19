import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
  loading: false,
  error: null,
  genre: "ALL",
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    setSongs: (state, action) => {
      state.songs = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
  },
});

export const { setSongs, setLoading, setError, setGenre } = musicSlice.actions;
export default musicSlice.reducer;
