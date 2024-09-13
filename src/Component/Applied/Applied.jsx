import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../JsFunction/localStorage";
import LogoBanner from "../LogoBanner/LogoBanner";
import AppliedJobCard from "../AppliedJobCard/AppliedJobCard";
import { Helmet } from "react-helmet-async";


const Applied = () => {
    const allJobs = useLoaderData();

    const [jobsApplied, setJobsApplied] = useState([]);
    const [remoteJobs, setRemoteJobs] = useState([]);
    const [onsiteJobs, setOnsiteJobs] = useState([]);
    const [selectedOption, setSelectedOption] = useState('All');

    useEffect(() => {
        const storedJobsArray = getStoredJobApplication();
        // const storedJobNumber = storedJobsArray.map(Number);
        if (allJobs.length > 0) {

            const appliedJob = allJobs.filter(job => storedJobsArray.includes(job.id));
            setJobsApplied(appliedJob);

            const jobsRemote = allJobs.filter(job => job.remote_or_onsite === 'Remote');
            setRemoteJobs(jobsRemote);

            const jobsOnsite = allJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setOnsiteJobs(jobsOnsite);
        }
    }, [])

    const handleDropDownChange = (e) =>{
        const filterOption = e.target.innerText;
        console.log(filterOption);
        setSelectedOption(filterOption);

    }
   

    console.log(jobsApplied, remoteJobs);

    return (
        <div>
            <Helmet>
                <title>Applied-Jobs</title>
            </Helmet>
            <div>
                <LogoBanner title={'Applied Jobs'}></LogoBanner>
            </div>
            <div className="content m-auto">
                <div className="text-right">
                    <details className="dropdown dropdown-top dropdown-end">
                        <summary className="m-1 btn bg-violet-800">Filter</summary>
                        <ul onClick={handleDropDownChange} className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40">
                            <li><a>All</a></li>
                            <li><a>Remote</a></li>
                            <li><a>Onsite</a></li>
                        </ul>
                    </details>
                </div>
                <div className="flex flex-col gap-4 py-12">

                    {selectedOption === 'All' && jobsApplied.map(job => <AppliedJobCard job={job}></AppliedJobCard>)}

                    {selectedOption === 'Remote' && remoteJobs.map(job => <AppliedJobCard job={job}></AppliedJobCard>)}

                    {selectedOption === 'Onsite' && onsiteJobs.map(job => <AppliedJobCard job={job}></AppliedJobCard>)}
                </div>

            </div>

        </div>
    );
};

export default Applied;