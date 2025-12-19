import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSongs, setLoading, setError } from "./features/musicSlice";
import { fetchSongsApi } from "./services/musicApi";

import SongCard from "./components/SongCard";
import Sidebar from "./components/Sidebar";
import TopPlay from "./components/TopPlay";
import SongDetails from "./pages/SongDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const dispatch = useDispatch();
  const { songs, loading, error, genre } = useSelector(
    (state) => state.music
  );

  // 🔹 THE SIDEBAR TOGGLE STATE (THIS IS THE KEY)
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const { toggleTheme } = useContext(ThemeContext);

  // 🔹 FETCH SONGS
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        dispatch(setLoading());
        const data = await fetchSongsApi();
        dispatch(setSongs(data));
      } catch {
        dispatch(setError("Failed to fetch songs"));
      }
    };
    fetchSongs();
  }, [dispatch]);

  const filteredSongs =
    genre === "ALL"
      ? songs
      : songs.filter((song) => song.genre === genre);

  if (loading) return <p>Loading songs...</p>;
  if (error) return <p>{error}</p>;

  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        {/* 🔹 SIDEBAR (OPEN / CLOSE) */}
        <Sidebar isOpen={sidebarOpen} />

        {/* 🔹 MAIN CONTENT */}
        <div style={{ padding: 10, flex: 1 }}>
          {/* 🔹 TOP BAR BUTTONS */}
          <div style={{ marginBottom: 10 }}>
            {/* ☰ BUTTON — THIS OPENS & CLOSES SIDEBAR */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{
                fontSize: 24,
                marginRight: 10,
                cursor: "pointer",
              }}
            >
              ☰
            </button>

            {/* THEME TOGGLE */}
            <button onClick={toggleTheme}>Toggle Theme</button>
          </div>

          <h1>Music App</h1>

          <TopPlay />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  {filteredSongs.map((song) => (
                    <SongCard key={song.id} song={song} />
                  ))}
                </>
              }
            />
            <Route path="/song/:id" element={<SongDetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
