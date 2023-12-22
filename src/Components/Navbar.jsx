import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";
import { useContext } from "react";


const Navbar = () => {
    const { user , logOut} = useContext(AuthContext)
    const handleLogOut = ()=>{
        logOut()
        .then(()=> console.log('User logged out succesfully'))
        .catch(error => console.log(error))
    }
    return (
        <div className="navbar bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="dashboard">Dashboard</Link></li>
                        <li><Link to="login">Login</Link></li>
                        <li><Link to="register">Register</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Trello</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="dashboard">Dashboard</Link></li>
                    <li><Link to="login">Login</Link></li>
                    <li><Link to="register">Register</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a onClick={handleLogOut} className="btn">Logout</a>
            </div>
        </div>
    );
};

export default Navbar;