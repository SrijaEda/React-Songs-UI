import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SongDetails() {
  const { id } = useParams();
  const songs = useSelector((state) => state.music.songs);

  const song = songs.find((s) => s.id === Number(id));

  if (!song) return <p>Song not found</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>{song.title}</h2>
      <p><b>Artist:</b> {song.artist}</p>
      <p><b>Genre:</b> {song.genre}</p>

      <button>▶ Play</button>
    </div>
  );
}
