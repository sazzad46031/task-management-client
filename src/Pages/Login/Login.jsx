import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";





const Login = () => {
    const { signInUser , signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        signInUser(email,password)
        .then(result => {
            console.log(result.user)
            e.target.reset()
            navigate('/dashboard')
        })
        .catch(error => {
            console.log(error)
        })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="pl-8">
                        New here ? Please <Link to="/register">
                            <button className="btn btn-link">Register</button>
                        </Link>
                    </p>
                    <p onClick={handleGoogleSignIn} className="pl-8 pb-4"><button className="btn btn-ghost">Google</button></p>
                </div>
            </div>
        </div>
    );
};

export default Login;