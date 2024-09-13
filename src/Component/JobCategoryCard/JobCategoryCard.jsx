

const JobCategoryCard = ({job}) => {
    return (
        <div>
            <div className="w-52 h-48 rounded-md bg-slate-700 p-4 flex flex-col gap-4 text-left justify-center">
                    <div className="p-2 bg-slate-800 w-fit">
                        <img src={job.logo} alt="job-icon" />
                    </div>
                    <div>
                        <h4 className="font-bold">{job.category_name}</h4>
                        <p><small className="text-gray-300">{job.availability}</small></p>
                    </div>
                </div>
        </div>
    );
};

export default JobCategoryCard;