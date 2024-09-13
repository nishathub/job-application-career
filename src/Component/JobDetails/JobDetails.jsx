import { useLoaderData, useParams } from "react-router-dom";
import { CiBadgeDollar, CiPhone, CiLocationOn } from "react-icons/ci";
import { TiShoppingBag } from "react-icons/ti";
import { AiOutlineMail } from "react-icons/ai";
import LogoBanner from "../LogoBanner/LogoBanner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../JsFunction/localStorage";



const JobDetails = () => {
    const job = useLoaderData();
    const { jobId } = useParams();
    console.log(job, jobId);
    const filteredJob = job.find(jobItem => jobItem.id === parseInt(jobId))
    console.log(filteredJob, jobId);
    const {company_name, contact_information, salary, job_title, job_description, job_responsibility, experiences, educational_requirements } = filteredJob;

    const handleApplyButton = () => {
        const jobIdInt = parseInt(jobId);
        saveJobApplication(jobIdInt);
        toast(`${job_title} at ${company_name} Applied !`)
    }
    return (
        <div className="py-8">
            <div className="logoBanner">
           <LogoBanner title={'Job Details'}></LogoBanner>
            </div>
            <div className="grid md:grid-cols-3 md:gap-4 content m-auto pb-12">
                <div className="md:col-span-2  text-left flex-col gap-4 flex p-2 md:w-auto w-2/3 m-auto mb-8 md:mb-0">
                    <p><span className="font-bold text-lg">Job Description: </span>{job_description}</p>

                    <p><span className="font-bold text-lg">Job Responsibility: </span> {job_responsibility}</p>

                    <h4 className="font-bold text-lg">Educational Requirements:</h4>

                    <p>{educational_requirements}</p>

                    <h4 className="font-bold text-lg">Experience :</h4>

                    <p>{experiences}</p>
                </div>

                <div>
                    <div className="md:w-auto w-2/3 m-auto flex flex-col gap-4 text-left job-details-card p-4 bg-purple-800 rounded-md ">
                        <h4 className="border-b pb-4">Job Details</h4>
                        <div>
                            <div className="flex items-center gap-2">
                                <CiBadgeDollar />
                                <p><span>Salary : </span>{salary}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <TiShoppingBag />
                                <p><span>Job Title : </span>{job_title}</p>
                            </div>
                        </div>
                        <h4 className="border-b pb-4">Contact Information</h4>
                        <div>
                            <div className="flex items-center gap-2">
                                <CiPhone />
                                <p><span>Phone : </span>{contact_information.phone}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <AiOutlineMail />
                                <p><span>Email : </span>{contact_information.email}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <CiLocationOn />
                                <p><span>Address : </span>{contact_information.address}</p>
                            </div>
                        </div>
                    </div>
                        <button onClick={handleApplyButton} className="btn md:w-full w-2/3 m-auto bg-violet-700 mt-2 border-none text-lg text-slate-200">Apply Now</button>
                        <ToastContainer></ToastContainer>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;