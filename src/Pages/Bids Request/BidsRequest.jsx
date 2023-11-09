import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import RequestRow from "./RequestRow";

const BidsRequest = () => {
    const { user } = useContext(AuthContext)
    const [bids, setbids] = useState([])
    const url = `https://job-seeker-server-liard.vercel.app/allbids`



    const handleReqReject = (bid) => {
        let { _id, job_title, deadline, userEmail, status } = bid
        const bidUpdate = { job_title, deadline, userEmail, status: 'rejected' }

        fetch(`https://job-seeker-server-liard.vercel.app/bids/${_id}`, {
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
                updated.status = 'rejected'
                const newUpdated = [updated, ...remainning]
                setbids(newUpdated)
            })

    }

    const handleReqAccept = (bid) => {
        let { _id, job_title, deadline, userEmail, status } = bid
        const bidUpdate = { job_title, deadline, userEmail, status: 'In Progress' }

        fetch(`https://job-seeker-server-liard.vercel.app/bids/${_id}`, {
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
    const bidFilter = bids.filter(bid => bid.buyeremail === user?.email)
    // console.log(bidFilter)
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Job title</th>
                        <th>Email</th>
                        <th>Deadline</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bidFilter.map((bid) => <RequestRow key={bid._id} bid={bid} handleReqReject={handleReqReject} handleReqAccept={handleReqAccept}></RequestRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default BidsRequest;