import axios from "axios";

// Mock API (safe & fast)
export const fetchSongsApi = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  // Convert posts → songs
  return response.data.slice(0, 10).map((item) => ({
    id: item.id,
    title: item.title,
    artist: "Unknown Artist",
    genre: item.id % 2 === 0 ? "Pop" : "Rock",
  }));
};
