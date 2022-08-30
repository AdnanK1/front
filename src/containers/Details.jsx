import { useParams } from "react-router-dom";
import { useFetch } from "../useFetch";


export const Details = () => {
  const { id } = useParams();
  const { data: post, error } = useFetch(
    "http://127.0.0.1:8000/document/" + id
  );
  return (
    <div className="details">
      {error && <h2> {error} </h2>}
      {post && (
        <article>
          <h2>
            {" "}
            {post.catch_word} - {post.heading}{" "}
          </h2>
          <h3> Station: {post.station}</h3>
          <h3> Date : {post.date}</h3>
          <h3>By : {post.author}</h3>
          <div>{post.story}</div>
        </article>
      )}
    </div>
  );
};
