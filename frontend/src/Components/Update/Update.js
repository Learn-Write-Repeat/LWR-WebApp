import './Update.css';
// import {useState} from 'react';
import { useHistory,useParams } from "react-router-dom";
import useFetch from './useFetch.js';

const Create = () => {

    const { id } = useParams();
    const { data: blog ,isPending, error } = useFetch('http://localhost:8000/api/blogs/' + id);

    // const [title, setTitle] = useState('');
    // const [thumbnail, setThumbnail] = useState('');
    // const [description, setDescription] = useState('');
    // const [body, setBody] = useState('');
    
    let title;
    let body;
    // let thumbnail;
    let description;

    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault();
        const blog = {title,description,body};

        fetch('http://localhost:8000/api/blogs/' + id, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
        }).then(() => {
        alert('Blog updated successfully!');
        history.push('/api/blogs/' + id);
      })
    }


    return (
        <div className="create">

            <center>

                <h1 className="title">
                    Make your Changes here.
                </h1>

                { error && <div className="fetch-error"><center>{ error }</center></div> }
                { isPending && <div className="loading">
                <center>
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden"></span>
                </div>
                </center>
                </div> }

                { blog && <form>
                
                <input type="text" 
                className="form-control blog-title-detail blog-form" 
                id="formGroupExampleInput" 
                placeholder="Give a title to your blog"
                defaultValue={ blog.title } 
                onChange = {(e) => title = e.target.value}
                required/>

                {/* TODO - handle image upload */}
                
                {/* <input type="file" 
                name="thumbnail" 
                defaultValue={ blog.thumbnail } 
                onChange = {(e) => thumbnail = e.target.value}
                className="form-control file-input blog-form" 
                id="inputGroupFile02" 
                placeholder="Select image for thumbnail"/> */}


                <textarea className="form-control desc-input blog-form" 
                id="exampleFormControlTextarea1" 
                rows="3" placeholder="Describe your blog in short"
                name="description" 
                defaultValue={ blog.description } 
                onChange = {(e) => description = e.target.value}
                required></textarea>

                <textarea className="form-control blog-input blog-form" 
                id="exampleFormControlTextarea1" 
                rows="3" placeholder="Write your blog post here" 
                name="body" 
                defaultValue={ blog.body } 
                onChange = {(e) => body = e.target.value}
                required></textarea>

                <br />

                <button onClick={handleSubmit} type="button" className="btn btn-primary">
                    Save changes
                </button>

                </form>}

            </center>

        </div>
    );
}
 
export default Create;