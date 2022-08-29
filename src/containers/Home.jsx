import { PostList } from "../components/PostList";

import { useFetch } from "../useFetch";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Home = () => {
  const { data, error } = useFetch("");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  console.log(search);

  const handleRoute = () => {
    navigate("/create");
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search...."
          onChange={(e) => setSearch(e.target.value)}
          className="search"
        />
      </div>
      <button className="post-button" onClick={handleRoute}>Post Document +</button>
      <PostList />
    </div>
  );
};
