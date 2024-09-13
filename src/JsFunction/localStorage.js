
const getStoredJobApplication = () => {
    const storedJobString = localStorage.getItem('appliedJob');
    if (storedJobString) {
        return JSON.parse(storedJobString);
    } else {
        return [];
    }
}

const saveJobApplication = (id) => {
    const storedJobApplications = getStoredJobApplication();
    const exists = storedJobApplications.find(number => number == id)
    if (!exists) {
        storedJobApplications.push(id);
        const storedJobApplicationsString = JSON.stringify(storedJobApplications);
        localStorage.setItem('appliedJob', storedJobApplicationsString);
    }
}
const removeJobApplication = (id) => {
    console.log('remove working');
    const storedJobApplications = getStoredJobApplication();
    // const exists = storedJobApplications.find(number => number == id)
    console.log(storedJobApplications);
    const filteredJob = storedJobApplications.filter(jobId => jobId !== id);
    console.log(filteredJob);
    const filteredJobString = JSON.stringify(filteredJob);
    localStorage.setItem('appliedJob', filteredJobString);
}

export { getStoredJobApplication, saveJobApplication, removeJobApplication };

