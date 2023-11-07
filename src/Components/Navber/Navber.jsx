import { Link, NavLink } from "react-router-dom";
import { useContext } from 'react'
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Navber = () => {
    const userInfo = useContext(AuthContext)
    const { user, logoutUser } = userInfo

    const handleUser = () => {
        logoutUser()
    }
    const navlinks = <>
        <li><NavLink className='no-underline' to={'/'}>Home</NavLink></li>
        <li><NavLink className='no-underline' to={'/addjobs'}>Add Jobs</NavLink></li>
        <li><NavLink className='no-underline' to={'/mypostedjob'}>My Posted Jobs</NavLink></li>
        <li><NavLink className='no-underline' to={'/bidsrequest'}>Bids Request</NavLink></li>
        <li><NavLink className='no-underline' to={'/mybids'}>My Bids</NavLink></li>
    </>
    return (
        <div className="navbar flex justify-between items-center bg-base-100">
            <div className="">
                <div className="dropdown block  md:hidden lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">JobSeeker</a>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="">
                {
                    user ?
                        <div className="flex">
                            <div className="flex flex-col items-center mr-2">
                                <p className="outline-1 rounded-lg text-xs hidden md:block lg:block">{user.displayName ? user.displayName : user.email}</p>
                                <div className="block md:flex lg:flex items-center">
                                    <Link><button onClick={handleUser} className="btn btn-xs">Logout</button></Link>
                                    {/* <input type="checkbox" className="toggle] h-[10px" checked /> */}
                                    <div>

                                    </div>

                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL && user.photoURL} />
                                </div>
                            </div>
                        </div>
                        :
                        <div className="flex justify-between">
                            <NavLink className='mr-2 no-underline' to={'/login'}>Login</NavLink>
                            <NavLink className='no-underline' to={'/register'}>Register</NavLink>
                        </div>

                }
            </div>
        </div>
    );
};

export default Navber;