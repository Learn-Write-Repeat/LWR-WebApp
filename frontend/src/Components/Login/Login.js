import './Login.css';

const Login = () => {
    return (
        <div className="login">
            <center>

                <h1 className="title">
                    Login to continue
                </h1>

                <form action="/" method="post">

                <input type="email" 
                name="email"
                className="form-control login-form" 
                id="formGroupExampleInput" 
                placeholder="Email"/>

                <input type="password" 
                name="password"
                className="form-control login-form" 
                id="formGroupExampleInput" 
                placeholder="Password"/>

                <br />

                <button type="button" className="btn btn-primary login-form">
                    Login
                </button>

                </form>

            </center>
        </div>
    );
}
 
export default Login;