import React from 'react';
import { Link } from 'react-router-dom';
import './Content.css';
import useFetch from './useFetch';

  function Content() {

    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/api/blogs')

    return (
       <div> 

        <section className="blogs-base">

          <center>
            <h1 className="content-title">All Blogs appear here !</h1>
          </center>

          { error && <div className="fetch-error"><center>{ error }</center></div> }
          { isPending && <div className="loading">
          <center>
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          </center>
          </div> }

          {/* { ideas && <Ideas ideas={ideas} /> } */}
          
          {blogs && blogs.map(blog => (
          
          <center>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="/Images/test-thumbnail.jpg" class="img-fluid rounded-start thumbnail" alt=""/>
                </div>
                <div class="col-md-8">
                   <div class="card-body">
                      <h1 className="blog-title">{ blog.title}</h1>
                      <p class="blog-desc">{blog.description}</p>
                      <p class="post-date">Last updated : { blog.createdAt }</p>
                      <Link to={`/api/blogs/${blog._id}`}>
                      <button type="button" class="btn btn-primary blog-btn">
                        Read more
                      </button>
                      </Link>
                    </div>
                </div>
              </div>
            </div>
          </center>
          
           ))}

        </section>


    {/* <section class="bg-light mt-5" id="team">    
     <div class="container">
      <div class="row text-center">
        <div class="col-sm-12 col-md-12 mb-4">
            <h3 class="text-center mt-4 text-secondary">Our Team</h3>
         </div>
        <div class="col-md-4">
          <div class="testimonial mb-5">
           <div class="avatar mx-auto">
            <img src="Images/profile.PNG" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">First</h4>
          <h6 class="font-weight-bold blue-text my-3"></h6>
          <p class="font-weight-normal dark-grey-text">
            Team Member.</p>
        </div>
      </div>

      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="Images/profile.PNG" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Second</h4>
          <h6 class="font-weight-bold blue-text my-3"></h6>
          <p class="font-weight-normal dark-grey-text">Team Member.</p>
        </div>

      </div>
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="Images/profile.PNG" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Third</h4>
          <h6 class="font-weight-bold blue-text my-3"></h6>
          <p class="font-weight-normal dark-grey-text">
            Team Member.</p>
        </div>
        </div>
      </div>
    </div> 
   </section>  */}
   </div>
    );
  }
  
  export default Content;