import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [station, setStation] = useState("");
  const [author, setAuthor] = useState("");
  const [story, setStory] = useState("");
  const [heading, setHeading] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState({})

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    navigate("/")
  };

  return (
    <div className="create">
      <h2>Add a File</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title of the document"
        />

        <label>Heading: </label>
        <input
          type="text"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          placeholder="Name of the Heading"
        />

        <label>Station:</label>
        <select value={station} onChange={(e) => setStation(e.target.value)}>
          <option value=""> ----- </option>
          <option value="Isiolo">Isiolo</option>
          <option value="Kiambu">Kiambu</option>
          <option value="Nairobi">Nairobi</option>
          <option value="Mombasa">Mombasa</option>
        </select>

        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Name of the Author"
        />

        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label>Images:</label>
        <input type="file" multiple onChange={(e)=> setImage(e.target.files)}/>

        <label>Story:</label>
        <textarea cols="30" rows="10" value={story} onChange={(e) => setStory(e.target.value)} />

        {!loading && <button>Add Post</button>}
        {loading && <button disabled="disabled">Posting...</button>}

      </form>
    </div>
  );
};
