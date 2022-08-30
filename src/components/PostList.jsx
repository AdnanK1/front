import React from "react";
import { Link } from "react-router-dom";

export const PostList = ({ posts }) => {
  return (
    <div className="post">
      <table>
        <thead>
          <th>Catch word</th>
          <th>Station</th>
          <th>Heading</th>
          <th>Date</th>
          <th>Author</th>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <Link to={`/post/${post.id}`}>
                <td>{post.catch_word}</td>
                <td>{post.station}</td>
                <td>{post.heading}</td>
                <td>{post.date}</td>
                <td>{post.author}</td>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

        
       