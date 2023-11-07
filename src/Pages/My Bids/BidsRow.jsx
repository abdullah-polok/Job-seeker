import { FaCheck, } from 'react-icons/fa'
import { FaXmark } from "react-icons/fa6";

const BidsRow = ({ bid, handleReject, handleAccept }) => {
    const { _id, job_title, userEmail, deadline, status } = bid
    console.log(status)
    return (
        <tr>
            <td>{job_title}</td>
            <td>{userEmail}</td>
            <td>{deadline}</td>
            <td>{
                status === 'Canceled' ?
                    <button className='text-red-600 outline rounded p-1'>{status}</button>
                    : <>
                        {status === 'Pending' && <button className='text-yellow-600 outline rounded p-1'>{status}</button>}
                        {status === 'In Progress' && <button className='text-cyan-600 outline rounded p-1'>{status}</button>}
                    </>
            }</td>
            <td>
                <div>
                    {
                        status === 'In Progress' ? <>
                            <button onClick={() => handleAccept(bid)} className='btn btn-success mr-2'><FaCheck></FaCheck></button>
                            <button onClick={() => handleReject(bid)} className='btn'><FaXmark className='bg-red-500 w-[40px] rounded-sm '></FaXmark></button>
                            <button className='btn btn-primary'>Complete</button>
                        </> :
                            <>
                                <button onClick={() => handleAccept(bid)} className='btn btn-success mr-2'><FaCheck></FaCheck></button>
                                <button onClick={() => handleReject(bid)} className='btn'><FaXmark className='bg-red-500 w-[40px] rounded-sm '></FaXmark></button>
                            </>

                    }
                    {/* <button id={`complete-${bid._id}`} onClick={() => completeJob(bid._id)} disabled={bid.status !== 'In progress'}></button> */}
                </div>
            </td>
        </tr >
    );
};

export default BidsRow;