import { Link } from "react-router-dom";
import { useState } from 'react';

const PostJob = ({ job }) => {

    const { _id, job_title, email, price_range, deadline, short_description, type } = job

    const [jobs, setjobs] = useState();

    const handleDelete = (id) => {
        console.log(id)
        fetch(`https://job-seeker-server-liard.vercel.app/addjobs/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                res.json()
            })
            .then(data => {
                console.log(data)
                // if (data.deletedCount > 0) {
                console.log("Deleted successfully")
                ///remove the user from the user interface and set the remain user after delete
                const remainningJobs = jobs.filter(jobs._id !== id)
                setjobs(remainningJobs)
                console.log(remainningJobs)
                // }

            })
    }
    return (
        <div className="bg-blue-100 mt-2">
            <div className="flex justify-between items-center p-3 rounded-lg text-base">
                <div>
                    <h1 className="text-xl font-bold">{job_title}</h1>
                    <div>
                        <p className="text-base mt-0 mb-1">Email: {email}</p>
                        <p className="text-base mt-0 mb-1 ">Type:{type}</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-sm mt-0 mb-1" >Deadline: {deadline}</p>
                        <p className="text-sm mt-0 mb-1">Price: ${price_range}</p>
                        <p className="text-xs">Description: {short_description}</p>
                    </div>
                </div>
                <div>
                    <Link to={`/updatejob/${_id}`}><button className="btn btn-primary mr-2">Update</button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary">X</button>
                </div>
            </div>
        </div>
    );
};

export default PostJob;