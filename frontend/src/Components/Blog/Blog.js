import { Link, useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
import "./Blog.css";

const Blog = () => {
  const { id } = useParams();
  console.log(id);
  const {
    data: blog,
    error,
    isPending,
  } = useFetch(process.env.REACT_APP_BASE_API + "api/blogs/" + id);
  const history = useHistory();

  function handleDelete() {
    fetch(process.env.REACT_APP_BASE_API + "api/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      console.log(blog._id);
      alert("Deleted successfully!");
      history.push("/api/blogs");
    });
  }

  return (
    <div>
      <center>
        {error && (
          <div className="fetch-error">
            <center>{error}</center>
          </div>
        )}
        {isPending && (
          <div className="loading">
            <center>
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </center>
          </div>
        )}

        {blog && (
          <div>
            <h1 className="blog-title-view">{blog.title}</h1>

            <Link to={`/api/blogs/edit/${blog._id}`}>
              <button type="button" className="btn btn-warning edit-btn">
                Edit
              </button>
            </Link>

            <button
              onClick={handleDelete}
              type="button"
              className="btn btn-danger delete-btn"
            >
              Delete
            </button>

            <p className="blog-body">{blog.body}</p>
          </div>
        )}
      </center>
    </div>
  );
};

export default Blog;
