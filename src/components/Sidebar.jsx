import { useDispatch } from "react-redux";
import { setGenre } from "../features/musicSlice";

export default function Sidebar({ isOpen }) {
  const dispatch = useDispatch();

  if (!isOpen) return null; // 🔴 hides sidebar when closed

  return (
    <div
      style={{
        width: 200,
        padding: 10,
        borderRight: "1px solid #ccc",
      }}
    >
      <h3>Genres</h3>

      <button onClick={() => dispatch(setGenre("ALL"))}>All</button><br />
      <button onClick={() => dispatch(setGenre("Pop"))}>Pop</button><br />
      <button onClick={() => dispatch(setGenre("Rock"))}>Rock</button>
    </div>
  );
}
