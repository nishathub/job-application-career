import { useEffect, useState } from "react";
import JobCategoryCard from "../JobCategoryCard/JobCategoryCard";
import SectionTitle from "../SectionTitle/SectionTitle";


const JobCategory = () => {
    const [jobCategory, setJobCategory] = useState([]);

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setJobCategory(data))
    }, [])

    return (
        <div className="my-12">
            <SectionTitle 
            title={'Job Category List'} 
            paragraph={'Explore thousands of job opportunities with all the information you need.'}>
            </SectionTitle>
            <div className="mt-8 flex flex-wrap gap-8 justify-center">
                    {
                        jobCategory.map(job => <JobCategoryCard key={job.id} job = {job}></JobCategoryCard>)
                    }
            </div>
        </div>
    );
};

export default JobCategory;