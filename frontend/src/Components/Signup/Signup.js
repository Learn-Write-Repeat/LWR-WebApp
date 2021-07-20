import './Signup.css';

const Signup = () => {
    return (
        <div className="signup">
            <center>

                <h1 className="title">
                    Create an account
                </h1>

                <form action="/" method="post">

                <input type="email" 
                name="email"
                className="form-control signup-form" 
                id="formGroupExampleInput" 
                placeholder="Email"/>

                <input type="password" 
                name="password"
                className="form-control signup-form" 
                id="formGroupExampleInput" 
                placeholder="Password"/>

                <input type="password" 
                name="confirm-password"
                className="form-control signup-form" 
                id="formGroupExampleInput" 
                placeholder="Confirm password"/>

                <br />

                <button type="button" className="btn btn-primary signup-form">
                    Create account
                </button>

                </form>

            </center>
        </div>
    );
}
 
export default Signup;