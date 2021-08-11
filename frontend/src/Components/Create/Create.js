import "./Create.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const blog = { title, description, body };

    fetch(process.env.REACT_APP_BASE_API + "api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      alert("Blog added successfully!");
      history.push("/api/blogs");
    });
  }
  

  return (
    <div className="create">
      <center>
        <h1 className="title">Go on write your Blog!</h1>
        <form action="/action_page.php">
    <label className="Category" for="Category">Select a Category:</label>
    <select name="category" id="category">
    <option className="cate"
    value="music">Music</option>
    <option className="cate"
    value="music">Travel</option>
    <option className="cate"
    value="music">Food</option>
    </select>
        </form>
      <br></br>
        <form>
          <input
            type="text"
            className="form-control blog-title-detail blog-form"
            id="formGroupExampleInput"
            placeholder="Give a title to your blog"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          {/* TODO - handle image upload */}

          {/* <input type="file" 
                name="thumbnail" 
                value={ thumbnail } 
                onChange = {(e) => setThumbnail(e.target.value)}
                className="form-control file-input blog-form" 
                id="inputGroupFile02" 
                placeholder="Select image for thumbnail"/> */}

          <textarea
            className="form-control desc-input blog-form"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Describe your blog in short"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>

          <textarea
            className="form-control blog-input blog-form"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Write your blog post here"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>

          <br />

          <button
            onClick={handleSubmit}
            type="button"
            className="btn btn-primary"
          >
            Post Blog
          </button>
        </form>
      </center>
    </div>
  );
};

export default Create;
