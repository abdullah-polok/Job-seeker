
const PostJob = ({ job }) => {
    const { job_title, deadline, short_description, email, type } = job
    return (
        <div className=" bg-base-200">
            <div className="flex justify-between items-center p-3 rounded-lg">
                <div className="text-left">
                    <h1 className="text-xl font-bold">{job_title}</h1>
                    <p className="py-1">Deadline: {deadline}</p>
                    <p className="py-1">Description: {short_description}</p>
                </div>
                <div>
                    <button className="btn btn-primary mr-2">Update</button>
                    <button className="btn btn-primary">X</button>
                </div>
            </div>
        </div>
    );
};

export default PostJob;