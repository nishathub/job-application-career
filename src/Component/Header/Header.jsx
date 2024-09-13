import { NavLink } from "react-router-dom";

const Header = () => {
    const links = 
        <>
        <li><NavLink to={'./'}>Home</NavLink></li>
        <li> <NavLink to={'./Statistics'}>Statistics</NavLink></li>
        <li> <NavLink to={'./Applied'}>Applied Jobs</NavLink></li>
        <li> <NavLink to={'./Blog'}>Blog</NavLink></li>
        </>

return (
    <div className="flex justify-center">
        <div className="navbar flex justify-between content">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl hidden md:flex">CareerHub</a>
                <div className="dropdown flex md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                        {links}
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl md:hidden">CareerHub</a>
                <ul className="gap-4 hidden md:flex">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="py-1 px-2 rounded-md btn-ghost text-lg bg-violet-600 md:inline-flex hidden">Start Applying</button>
            </div>
        </div>
    </div>
);
};

export default Header;