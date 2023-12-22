import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const TaskView = ({ task }) => {
    const { _id,titles, description, deadlines, priority } = task

    const handleDelete = _id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`http://localhost:5000/deleteTask/${_id}`,{
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
                });
                }
            })
            }
          });
    }
    return (
        <div>
            <div className="card w-96 bg-primary text-white">
                <div className="card-body">
                    <h2 className="card-title">{titles}</h2>
                    <p>{description}</p>
                    <p>{deadlines}</p>
                    <p>{priority}</p>
                    <Link to={`/updateTask/${_id}`}>
                        <button className="btn btn-neutral">Update</button>
                    </Link>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-neutral">Delete</button>
                </div>
            </div>

        </div>
    );
};

export default TaskView;