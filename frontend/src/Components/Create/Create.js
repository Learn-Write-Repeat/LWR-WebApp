import "./Create.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Category
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Food</a></li>
        <li><a class="dropdown-item" href="#">Music</a></li>
        <li><a class="dropdown-item" href="#">Travel</a></li>
        </ul>
      </div>
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
