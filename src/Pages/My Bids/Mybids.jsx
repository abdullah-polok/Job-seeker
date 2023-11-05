import { useEffect, useState } from 'react';

const Mybids = () => {

    const [bids, setbids] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/bids')
            .then(res => res.json())
            .then(data => setbids(data))
    }, [])
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
                            <td>{"pending"}</td>
                            <button className='btn btn-primary'>OK</button>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Mybids;