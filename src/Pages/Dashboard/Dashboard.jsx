import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import { Link } from "react-router-dom";
import TaskView from "../../Components/TaskView";


const Dashboard = () => {
    const [tasks, setTasks] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/getTask')
        .then(response => response.json())
        .then(data=> {
            console.log(data)
            setTasks(data)
        })
        
    },[])
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div>
                <div className="navbar bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">Dashboard</a>
                    </div>
                    <div className="flex-none gap-2">
                        
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-8 min-h-screen">
                <div className="bg-gradient-to-r from-red-500 to-purple-500 w-1/4 text-center">
                    <p className="text-3xl text-white mt-10 mb-6">Create Task</p>
                    <Link to="/createTask">
                        <button className="btn btn-primary text-center">Create task</button>
                    </Link>
                </div>
                <div className="bg-gradient-to-r from-red-500 to-purple-500 w-1/4 text-center">
                    <p className="text-3xl text-white mt-10 mb-6">To-do</p>
                    <div className="flex flex-col gap-4">
                    {
                        tasks?.map(task => <TaskView key={task._id} task={task}></TaskView>)
                    }
                    </div>
                </div>
                <div className="bg-gradient-to-r from-red-500 to-purple-500 w-1/4 text-center">
                    <p className="text-3xl text-white mt-10 mb-6">Ongoing</p>
                </div>
                <div className="bg-gradient-to-r from-red-500 to-purple-500 w-1/4 text-center">
                    <p className="text-3xl text-white mt-10 mb-6">Completed</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;