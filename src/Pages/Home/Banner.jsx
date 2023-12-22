import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="relative">
                <img className="w-full" src="./banner.jpg" alt="" />
            </div>
            <div className="absolute top-1/3 left-1/3">
                <h2 className="text-5xl mb-4 text-white">Task Management App</h2>
                <p className="text-xl text-white mb-4">Take Control of Your Tasks Today!</p>
                <Link to="login">
                    <button className="btn btn-info">Let's explore</button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;