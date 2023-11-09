import { NavLink } from "react-router-dom";
import { useContext } from 'react'
import { AuthContext } from "../../AuthProvider/AuthProvider";
import iconjob from '../../assets/android-chrome-512x512.png'
const Navber = () => {
    const userInfo = useContext(AuthContext)
    const { user, logoutUser } = userInfo

    const handleUser = () => {
        logoutUser()
    }
    const navlinks = <>
        <li><NavLink className='no-underline text-lg mx-0  mr-3 ' to={'/'}>Home</NavLink></li>
        <li><NavLink className='no-underline text-lg mx-0  mr-3 ' to={'/alljobs'}>All Jobs</NavLink></li>
        <li><NavLink className='no-underline text-lg mx-0  mr-3 ' to={'/addjobs'}>Add Jobs</NavLink></li>

    </>
    return (
        <div className="navbar shadow-gray-400 shadow-lg rounded-xl p-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        {
                            navlinks
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">JobFinder</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navlinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink className='no-underline text-lg mx-0   hover:bg-slate-800' to={'/mypostedjob'}>My Posted Jobs</NavLink></li>
                            <li><NavLink className='no-underline text-lg mx-0   hover:bg-slate-800' to={'/bidsrequest'}>Bids Request</NavLink></li>
                            <li><NavLink className='no-underline text-lg mx-0   hover:bg-slate-800' to={'/mybids'}>My Bids</NavLink></li>
                            <li><NavLink className='no-underline text-lg mx-0   hover:bg-slate-800' onClick={handleUser}>logout</NavLink></li>
                        </ul>
                    </div>
                        :
                        <>
                            <ul className="menu menu-horizontal px-1">
                                <li><NavLink className='no-underline text-base ' to='/login'>Login</NavLink></li>
                                <li><NavLink className='no-underline text-base' to='/register'>Register</NavLink></li>
                            </ul>
                        </>

                }
            </div>
        </div>
    );
};

export default Navber;