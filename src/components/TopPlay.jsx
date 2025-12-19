import { useSelector } from "react-redux";

export default function TopPlay() {
  const songs = useSelector((state) => state.music.songs);

  return (
    <div style={{ padding: 10, borderBottom: "1px solid #ccc" }}>
      <h3>🔥 Top Plays</h3>

      {songs.slice(0, 3).map((song) => (
        <div key={song.id} style={{ marginBottom: 8 }}>
          <strong>{song.title}</strong>
          <div style={{ fontSize: 12 }}>{song.artist}</div>
        </div>
      ))}
    </div>
  );
}
