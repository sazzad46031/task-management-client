import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import Register from "../Components/Register";
import PrivateRoute from "./PrivateRoute";
import CreateTask from "../Components/CreateTask";
import UpdateTask from "../Components/UpdateTask";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "register",
            element: <Register></Register>
        },
        {
            path: "createTask",
            element: <PrivateRoute><CreateTask></CreateTask></PrivateRoute>
        },
        { 
            path: "updateTask/:id",
            element: <PrivateRoute><UpdateTask></UpdateTask></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/getTask/${params.id}`)
        }
      ]
      
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    }
   
  ]);  