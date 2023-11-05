import { useEffect, useState } from 'react';
import PostJob from './postJob';

const MyPostedJobs = () => {

    const [postedJob, setPostedJob] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/addjobs')
            .then(res => res.json())
            .then(data => setPostedJob(data))
    }, [])
    console.log(postedJob)
    return (
        <div>
            {
                postedJob.map(job => <PostJob key={job._id} job={job}></PostJob>)
            }
        </div>
    );
};

export default MyPostedJobs;