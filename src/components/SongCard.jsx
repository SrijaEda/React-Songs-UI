export default function SongCard({ song }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
      <h3>{song.title}</h3>
      <p>Artist: {song.artist}</p>
      <p>Genre: {song.genre}</p>
      <button>▶ Play</button>
    </div>
  );
}
