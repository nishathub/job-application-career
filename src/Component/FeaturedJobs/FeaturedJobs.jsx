import { useState } from "react";
import JobCard from "../JobCard/JobCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import { CiLocationOn, CiBadgeDollar } from "react-icons/ci";

const FeaturedJobs = ({ jobs }) => {
    const [jobLength, setJobLength] = useState(4);
    return (

        <div>
            <div className="my-12">
                <SectionTitle
                    title={'Featured Jobs'}
                    paragraph={'Explore thousands of job opportunities with all the information you need.'}>
                </SectionTitle>
                <div className="grid md:grid-cols-2 gap-4 justify-center mt-12">
                    {
                        jobs.slice(0, jobLength).map((job, idx) => 
                            <JobCard key={idx} job ={job}></JobCard>
                        )
                    }
                </div>
                <div className= { `mt-4 ${jobs.length === jobLength && 'hidden'}`} >
                    <button onClick={() => setJobLength(jobs.length)} className="btn">Show all</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;