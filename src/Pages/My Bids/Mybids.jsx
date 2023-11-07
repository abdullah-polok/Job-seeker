import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../AuthProvider/AuthProvider';
import BidsRow from './bidsRow';
const Mybids = () => {
    const { user } = useContext(AuthContext);
    const [bids, setbids] = useState([])


    const url = `http://localhost:5000/bids?email=${user?.email}`

    const handleReject = (bid) => {
        let { _id, job_title, deadline, userEmail, status } = bid
        const bidUpdate = { job_title, deadline, userEmail, status: 'Canceled' }

        fetch(`http://localhost:5000/bids?email=${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bidUpdate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remainning = bids.filter(bid => bid._id !== _id)
                const updated = bids.filter(bid => bid._id === _id)
                updated.status = 'Canceled'
                const newUpdated = [updated, ...remainning]
                setbids(newUpdated)
            })
    }

    const handleAccept = (bid) => {
        let { _id, job_title, deadline, userEmail, status } = bid
        const bidUpdate = { job_title, deadline, userEmail, status: 'In Progress' }

        fetch(`http://localhost:5000/bids?email=${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bidUpdate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remainning = bids.filter(bid => bid._id !== _id)
                const updated = bids.filter(bid => bid._id === _id)
                updated.status = 'In Progress'
                const newUpdated = [updated, ...remainning]
                setbids(newUpdated)
            })
    }


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
                        bids.map((bid) => <BidsRow key={bid._id} bid={bid} handleReject={handleReject} handleAccept={handleAccept}></BidsRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Mybids;