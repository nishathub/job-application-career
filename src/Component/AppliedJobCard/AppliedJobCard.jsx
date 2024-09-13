import { CiLocationOn, CiBadgeDollar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { removeJobApplication } from "../../JsFunction/localStorage";


const AppliedJobCard = ({ job }) => {
    const navigate = useNavigate();
    const {id, company_name, salary, job_type, job_title, logo, remote_or_onsite, location } = job;

    const handleCardButton = (id) => {
        console.log(id);
        navigate(`/JobDetails/${id}`);
    }
    const handleCancelButton = id => {
        console.log(id);
        removeJobApplication(id);
        window.location.reload();

    }

    return (
        <div className=" border border-slate-300 rounded-md p-4 text-left flex flex-col md:flex-row justify-between items-left md:items-center gap-4 md:gap-0">
            <div className="flex items-left flex-col md:flex-row gap-4">
                <div className="h-40 w-40 flex items-center">
                    <div className="">
                        <img src={logo} alt="company_logo" />
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-4">
                    <div>
                        <h4 className="font-bold">{job_title}</h4>
                        <p><small className="text-gray-600">{company_name}</small></p>
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
                </div>
            </div>
            <div className="flex flex-col gap-2 md:items-center">
                <div className="">
                    <button onClick={() => handleCardButton(id)} className="px-4 py-1 rounded-md btn-ghost w-fit text-lg bg-violet-600">View Details</button>
                </div>
                <div className="">
                    <button onClick={() => handleCancelButton(id)} className="px-4 py-1 rounded-md btn-ghost w-fit text-lg bg-violet-600">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobCard;