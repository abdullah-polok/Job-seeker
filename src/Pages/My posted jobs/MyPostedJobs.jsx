import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import PostJob from './postJob';

const MyPostedJobs = () => {
    const { user } = useContext(AuthContext);
    const [postedJob, setPostedJob] = useState([])

    const url = `https://job-seeker-server-liard.vercel.app/alljobs?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPostedJob(data))
    }, [url])
    console.log(postedJob)
    return (
        <div className='grid grid-cols-1 gap-5'>
            {
                postedJob.map(job => <PostJob key={job._id} job={job}></PostJob>)
            }
        </div>
    );
};

export default MyPostedJobs;