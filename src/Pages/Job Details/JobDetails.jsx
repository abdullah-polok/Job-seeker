import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const job = useLoaderData();
    // console.log(job)
    const { job_title, deadline, price_range, short_description } = job
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
                        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className=''>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" defaultValue={'polok@tv.com'} readOnly className="input w-full" required />
                                    </div>
                                </div>
                                <div className='flex-row md:flex-col lg:flex '>
                                    <div className="form-control mb-2">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="number" placeholder="price" className="input " required />
                                    </div>
                                    <div className="form-control mb-2">
                                        <label className="label">
                                            <span className="label-text">Bid Amount</span>
                                        </label>
                                        <input type="number" placeholder="bid amount" className="input " required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Deadline</span>
                                        </label>
                                        <input type="date" placeholder="password" className="input " required />
                                    </div>
                                </div>
                                <div className=''>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="Buyer email" defaultValue={'buyer@cv.com'} readOnly className="input w-full" required />
                                    </div>
                                </div>
                                <div className="form-control w-11 mt-6">
                                    <button className="btn btn-primary">Bid on the project</button>
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