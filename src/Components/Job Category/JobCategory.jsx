import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import EachJob from './EachJob';
const JobCategory = () => {
    const [alljobs, setallJobs] = useState([])
    const [webJobs, setWebJobs] = useState([]);
    const [digitalJobs, setDigitalJobs] = useState([]);
    const [graphicsJob, setGraphicsJobs] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/alljobs')
            .then(res => res.json())
            .then(data => setallJobs(data))
    }, [])




    return (
        <div className='mt-24'>
            <div>
                <h1 className='text-3xl font-bold '>Job Category</h1>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Web development</Tab>
                    <Tab>Digital Marketing</Tab>
                    <Tab>Graphics Design</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 '>
                        {/* {
                            webJobs.map(job => <EachJob key={job._id} job={job}></EachJob>)
                        } */}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 '>
                        {/* {
                            digitalJobs.map(job => <EachJob key={job._id} job={job}></EachJob>)
                        } */}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 '>
                        {/* {
                            graphicsJob.map(job => <EachJob key={job._id} job={job}></EachJob>)
                        } */}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default JobCategory;