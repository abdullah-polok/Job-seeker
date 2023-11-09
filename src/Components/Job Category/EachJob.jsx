
import { Link } from 'react-router-dom'

const EachJob = ({ job }) => {
    const { _id, job_title, deadline, price_range, short_description } = job


    return (
        <div className="card w-96 bg-zinc-100 shadow-md border-success outline-success">
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p className='text-lg'>{short_description}</p>
                <div className='flex justify-between items-center text-sm'>
                    <p>Deadline:{deadline}</p>
                    <p>salary: {price_range}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/jobdetails/${_id}`}><button className="btn btn-success">Bid Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default EachJob;