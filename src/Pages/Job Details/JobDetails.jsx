import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const job = useLoaderData();
    console.log(job)
    const { job_title, deadline, price_range, short_description } = job
    return (
        <div>
            {/* <Card className="bg-dark text-white">
                <Card.Img src="holder.js/100px270" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{job_title}</Card.Title>
                    <Card.Text>
                        {short_description}
                    </Card.Text>
                    <Card.Text>Deadline:{deadline}</Card.Text>
                    <Card.Text>Salary:{price_range}</Card.Text>
                </Card.ImgOverlay>
            </Card> */}
        </div>
    );
};

export default JobDetails;