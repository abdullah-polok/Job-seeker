import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import EachJob from './EachJob';
const JobCategory = () => {
    const [alljobs, setallJobs] = useState([])
    const [alltype, setalltype] = useState([])


    useEffect(() => {
        fetch('https://job-seeker-server-liard.vercel.app/alljobs')
            .then(res => res.json())
            .then(data => setallJobs(data))
    }, [])

    useEffect(() => {
        fetch('https://job-seeker-server-liard.vercel.app/alltype')
            .then(res => res.json())
            .then(data => setalltype(data))
    }, [])

    const webJobs = alljobs.filter(job => job.type === alltype[0]?.type)
    const digitalJobs = alljobs.filter(job => job.type === alltype[1]?.type)
    const graphicsJob = alljobs.filter(job => job.type === alltype[2]?.type)

    // console.log(alltype[0].type)
    // console.log(webJobs)
    // console.log(digitalJobs)
    // console.log(graphicsJob)

    return (
        <div className='mt-24'>
            <div>
                <h1 className='text-3xl font-semibold rounded-md p-3 text-center  border-2 border-success'>Job Category</h1>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Web development</Tab>
                    <Tab>Digital Marketing</Tab>
                    <Tab>Graphics Design</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
                        {
                            webJobs.map(job => <EachJob key={job._id} job={job}></EachJob>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
                        {
                            digitalJobs.map(job => <EachJob key={job._id} job={job}></EachJob>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
                        {
                            graphicsJob.map(job => <EachJob key={job._id} job={job}></EachJob>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default JobCategory;