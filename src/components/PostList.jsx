import React from "react";
import { Link } from "react-router-dom";

export const PostList = () => {
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
          <tr>
            <td>Accident</td>
            <td>Isiolo</td>
            <td>Five killed after a trailer crashed into church buildings</td>
            <td>March 1, 2022</td>
            <td>Abduba Mamo</td>
          </tr>
          <tr>
            <td>Accident</td>
            <td>Isiolo</td>
            <td>Five killed after a trailer crashed into church buildings</td>
            <td>March 1, 2022</td>
            <td>Abduba Mamo</td>
          </tr>
          <tr>
            <td>Accident</td>
            <td>Isiolo</td>
            <td>Five killed after a trailer crashed into church buildings</td>
            <td>March 1, 2022</td>
            <td>Abduba Mamo</td>
          </tr>
          <tr>
            <td>Accident</td>
            <td>Isiolo</td>
            <td>Five killed after a trailer crashed into church buildings</td>
            <td>March 1, 2022</td>
            <td>Abduba Mamo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
