import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddJobs from "../Pages/Add job/AddJobs";
import BidsRequest from "../Pages/Bids Request/BidsRequest";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import JobDetails from "../Pages/Job Details/JobDetails";
import Login from "../Pages/Login/Login";
import Mybids from "../Pages/My Bids/Mybids";
import MyPostedJobs from "../Pages/My posted jobs/MyPostedJobs";
import Register from "../Pages/Register/Register";
import UpdateJob from "../Pages/Updatejob/UpdateJob";
import PrivateRouter from "../PrivateRouter/PrivateRouter";



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
                path: '/addjobs',
                element: <PrivateRouter><AddJobs></AddJobs></PrivateRouter>
            },
            {
                path: '/mypostedjob',
                element: <PrivateRouter><MyPostedJobs></MyPostedJobs></PrivateRouter>,
                loader: () => fetch(`https://job-seeker-server-liard.vercel.app/addjobs`)
            },
            {
                path: '/bidsrequest',
                element: <PrivateRouter><BidsRequest></BidsRequest></PrivateRouter>
            },
            {
                path: '/mybids',
                element: <PrivateRouter><Mybids></Mybids></PrivateRouter>
            },
            {
                path: '/jobdetails/:id',
                element: <PrivateRouter><JobDetails></JobDetails></PrivateRouter>,
                loader: ({ params }) => fetch(`https://job-seeker-server-liard.vercel.app/alljobs/${params.id}`)
            }, {
                path: '/updatejob/:id',
                element: <PrivateRouter><UpdateJob></UpdateJob></PrivateRouter>,
                loader: ({ params }) => fetch(`https://job-seeker-server-liard.vercel.app/addjobs/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
]);

export default router