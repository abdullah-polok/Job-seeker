import { useContext } from 'react';
import Card from 'react-bootstrap/Card';

import { useLoaderData, useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const JobDetails = () => {
    const { user } = useContext(AuthContext);
    const job = useLoaderData();
    const navigate = useNavigate();
    // console.log(job)
    const { poster_poster_email
        , poster_email, job_title, deadline, price_range, short_description } = job
    console.log(job)


    const handleBidForm = e => {
        e.preventDefault();
        const form = e.target
        const userEmail = form.userEmail.value;
        const bidamount = form.bidamount.value;
        const deadline = form.deadline.value;
        const buyeremail = form.buyeremail.value;

        const bidInfo = { job_title, userEmail, bidamount, deadline, buyeremail, status: "Pending" }
        console.log(bidInfo)

        ///create bids form data and send into the database
        fetch(`https://job-seeker-server-liard.vercel.app/bids`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bidInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast("Bid on the project successfully!");
                setInterval(5000)
                console.log("Need time")
            })

        navigate('/mybids')
    }



    return (
        <div className=' grid grid-cols-2 gap-5 mb-24'>
            <div>
                <Card className="bg-dark text-white p-4">
                    <Card.Title>{job_title}</Card.Title>
                    <Card.Text>
                        {short_description}
                    </Card.Text>
                    <Card.Text>Deadline:{deadline}</Card.Text>
                    <Card.Text>Salary:{price_range}</Card.Text>
                </Card>
            </div>
            <div>
                <div className="hero ">
                    <div className="hero-content ">
                        <div className="card flex-shrink-0 w-full">
                            <form onSubmit={handleBidForm} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='userEmail' placeholder="email" defaultValue={user?.email} readOnly className="input w-full text-white" required />
                                </div>
                                <div className='flex-row md:flex-col lg:flex '>
                                    <div className="form-control mb-2">
                                        <label className="label">
                                            <span className="label-text">Bid Amount</span>
                                        </label>
                                        <input type="number" name='bidamount' placeholder="bid amount" className="input text-white " required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Deadline</span>
                                        </label>
                                        <input type="date" name='deadline' placeholder="password" className="input text-white " required />
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Poster Email</span>
                                    </label>
                                    <input type="email" name='buyeremail' placeholder="Buyer email" defaultValue={poster_poster_email
                                    } readOnly className="input w-full text-white" required />
                                </div>

                                <div className="form-control w-11 mt-6">
                                    {user?.email === poster_email ?
                                        <button className="btn btn-primary w-full" disabled>Bid on the project</button>
                                        :
                                        <button className="btn btn-primary w-full " >Bid on the project</button>
                                    }
                                    <ToastContainer />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;