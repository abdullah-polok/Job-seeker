import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddJobs from "../Pages/Add job/AddJobs";
import BidsRequest from "../Pages/Bids Request/BidsRequest";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import JobDetails from "../Pages/Job Details/JobDetails";
import Login from "../Pages/Login/Login";
import MyPostedJobs from "../Pages/My posted jobs/MyPostedJobs";
import Register from "../Pages/Register/Register";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <Error></Error>
            },
            {
                path: '/addjobs',
                element: <AddJobs></AddJobs>
            },
            {
                path: '/mypostedjob',
                element: <MyPostedJobs></MyPostedJobs>
            },
            {
                path: '/bidsrequest',
                element: <BidsRequest></BidsRequest>
            },
            {
                path: '/jobdetails/:id',
                element: <JobDetails></JobDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/alljobs/${params.id}`)
            }
        ]
    },
]);

export default router