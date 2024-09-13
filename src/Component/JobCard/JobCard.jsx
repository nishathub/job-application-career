import { CiLocationOn, CiBadgeDollar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
    const navigate = useNavigate();
    const handleCardButton = (id) => {
        console.log(id);
        navigate(`/JobDetails/${id}`);
    }
    const {company_name, salary, job_title, remote_or_onsite, job_type, location } = job;
    return (
        <div>
            <div className="job-card border border-slate-300 rounded-md p-4 text-left flex flex-col gap-4">
                <div className="flex-grow flex items-center">
                    <img src={job.logo} alt="" />
                </div>
                <div>
                    <h4 className="font-bold">{job_title}</h4>
                    <p><small className="text-gray-300">{company_name}</small></p>
                </div>
                <div className="flex gap-4">
                    <button className="card-button">{remote_or_onsite}</button>
                    <button className="card-button">{job_type}</button>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <CiLocationOn />
                        <address>{location}</address>
                    </div>
                    <div className="flex items-center gap-2">
                        <CiBadgeDollar />
                        <p>Salary : {salary}</p>
                    </div>
                </div>
                <div className=" items-end flex">
                <button onClick={ () => handleCardButton(job.id)} className="px-4 py-1 rounded-md btn-ghost w-fit text-lg bg-violet-600">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default JobCard;