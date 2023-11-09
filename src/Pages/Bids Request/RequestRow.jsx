import { FaCheck, } from 'react-icons/fa'
import { FaXmark } from "react-icons/fa6";

const RequestRow = ({ bid, handleReqReject, handleReqAccept }) => {
    const { _id, job_title, userEmail, deadline, status, bidamount } = bid

    const handleButton = () => {
        document.getElementById('acceptId').style.display = "hidden"
        document.getElementById('rejectId').style.display = "hidden"
    }

    return (
        <tr>
            <td>{job_title}</td>
            <td>{userEmail}</td>
            <td>{deadline}</td>
            <td>{bidamount}</td>
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
                            <button id='acceptId' onClick={() => { handleReqAccept(bid), handleButton }} className='btn btn-success mr-2'><FaCheck></FaCheck></button>
                            <button id='rejectId' onClick={() => { handleReqReject(bid), handleButton }} className='btn'><FaXmark className='bg-red-500 w-[40px] rounded-sm '></FaXmark></button>
                        </> :
                            <>
                                <button onClick={() => handleReqAccept(bid)} className='btn btn-success mr-2'><FaCheck></FaCheck></button>
                                <button onClick={() => handleReqReject(bid)} className='btn'><FaXmark className='bg-red-500 w-[40px] rounded-sm '></FaXmark></button>
                            </>

                    }
                    {/* <button id={`complete-${bid._id}`} onClick={() => completeJob(bid._id)} disabled={bid.status !== 'In progress'}></button> */}
                </div>
            </td>
        </tr>
    );
};

export default RequestRow;