import { useLoaderData } from "react-router-dom";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import HomeBanner from "../HomeBanner/HomeBanner";
import JobCategory from "../JobCategory/JobCategory";
import { Helmet } from "react-helmet-async";


const Home = () => {
    const jobs = useLoaderData();
    console.log(jobs);
    return (
        <div>
            <Helmet>
                <title>Career-Hub | Home</title>
            </Helmet>
            <div className="content m-auto">
                <HomeBanner></HomeBanner>
                <JobCategory></JobCategory>
                <FeaturedJobs jobs={jobs}></FeaturedJobs>
            </div>
        </div>
    );
};

export default Home;