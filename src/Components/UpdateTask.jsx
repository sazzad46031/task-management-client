import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateTask = () => {
    const updateTask = useLoaderData()
    console.log(updateTask)
    const { _id, titles, description, deadlines, priority} = updateTask
    const handleUpdateTask = event =>{
        event.preventDefault()
        const form = event.target
        const titles =form.titles.value
        const description =form.description.value
        const deadlines =form.deadlines.value
        const priority =form.priority.value
        

        const updateTask = { titles, description, deadlines, priority }
        console.log(updateTask)
        fetch(`http://localhost:5000/updateTask/${_id}`,{
            method: 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updateTask)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Task updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="bg-lime-200 max-w-screen-2xl mx-auto p-24">
        <h2 className="text-5xl text-purple-400 font-bold mb-8 text-center">Update Task</h2>
        <form onSubmit={handleUpdateTask}>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Titles</span>
                    </label>
                    <input type="text" placeholder="Titles" defaultValue={titles}  name="titles" className="input w-full input-bordered" />
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" placeholder="Description" defaultValue={description} name="description" className="input w-full input-bordered" />
                </div>
                

            </div>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Deadlines</span>
                    </label>
                    <input type="text" placeholder="deadlines" defaultValue={deadlines} name="deadlines" className="input w-full input-bordered" />
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Priority</span>
                    </label>
                    <input type="text" placeholder="Priority" defaultValue={priority} name="priority" className="input w-full input-bordered" />
                </div>
            </div>
            
            <input type="submit" value="Update Task" className="btn btn-block bg-purple-400" />
        </form>
    </div>
    );
};

export default UpdateTask;