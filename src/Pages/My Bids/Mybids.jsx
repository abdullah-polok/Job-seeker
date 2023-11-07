import { useContext, useEffect, useState } from 'react';
import { FaCheck, } from 'react-icons/fa'
import { FaXmark } from "react-icons/fa6";
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Mybids = () => {
    const { user } = useContext(AuthContext);
    const [bids, setbids] = useState([])




    const url = `http://localhost:5000/bids?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setbids(data))
    }, [url])
    console.log(bids)
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Job title</th>
                        <th>Email</th>
                        <th>Deadline</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bids.map((bid) => <tr key={bid._id}>
                            <td>{bid.job_title}</td>
                            <td>{bid.userEmail}</td>
                            <td>{bid.deadline}</td>
                            <td id='statusId'>pending</td>
                            <td>
                                <div>
                                    <button className='btn btn-primary mr-2'><FaCheck></FaCheck></button>
                                    <button className='btn btn-primary'><FaXmark></FaXmark></button>
                                    {/* <button id={`complete-${bid._id}`} onClick={() => completeJob(bid._id)} disabled={bid.status !== 'In progress'}></button> */}
                                </div>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Mybids;