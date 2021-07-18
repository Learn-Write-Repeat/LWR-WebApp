import React from 'react';

  function Content() {
    return (
       <div>
         <section class="bg-dark">
              <div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img class="d-block w-100" src="Images/dev.PNG" alt="" style={{height:"600px"}}/>
                  </div>
                </div>
               </div>
        </section>   
        <section class="bg-light" id="about">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">About us</h3>
               </div>
              </div>
             <div class="row">
                <p class="mt-4 mb-5">This program is for anyone who wants to get skilled with some amazing projects and Interactive learning.</p>
             </div>   
          </div>   
        </section>   

        <section class="" id="blogs">   
         <div class="container">
             <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">Blogs</h3>
               </div>
              </div>
              <div class="row">
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/dev.PNG" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Blog 1</h4>
                          <p class="card-text text-secondary">Details of Blog 1.</p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-dark">Find Out More!</a>
                       </div>
                    </div>
                 </div>
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/dev.PNG" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Blog 2</h4>
                          <p class="card-text text-secondary">Details of Blog 2.</p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-dark">Find Out More!</a>
                       </div>
                    </div>
                 </div>
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="Images/dev.PNG" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Blog 3</h4>
                          <p class="card-text text-secondary">Details of Blog 3.</p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-dark">Find Out More!</a>
                       </div>
                    </div>
                 </div>
              </div>
        </div>
       </section>  

       <section class="bg-light mt-5"  id="description">
        <div class="container">
          <div class="col-sm-12 col-md-12 mb-4">
             <h3 class="text-center text-secondary mt-4">Description</h3>
         </div>
       <div class="accordion" id="accordionExample">
        <div class="card">
         <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
            An environment, where you not only have to read or watch videos but interactive modules where you can test your skills and compete with other participants. 
            </div>
         </div>
      </div>
      </div>
    </div> 
    </section>

    <section class="bg-light mt-5" id="team">    
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
   </section> 
   </div>
    );
  }
  
  export default Content;