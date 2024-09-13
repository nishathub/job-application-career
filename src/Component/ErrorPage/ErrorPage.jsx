import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2 className="mb-4">Opps!</h2>
            <p>Page Not Found</p>
            <button className="btn mt-8"><NavLink to={'/'}>Home</NavLink></button>
        </div>
    );
};

export default ErrorPage;