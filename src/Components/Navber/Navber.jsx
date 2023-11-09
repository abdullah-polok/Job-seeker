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
        <li><NavLink className='no-underline text-lg mx-0   hover:bg-slate-800' to={'/'}>Home</NavLink></li>
        <li><NavLink className='no-underline text-lg mx-0   hover:bg-slate-800' to={'/addjobs'}>Add Jobs</NavLink></li>
        <li><NavLink className='no-underline text-lg mx-0   hover:bg-slate-800' to={'/mypostedjob'}>My Posted Jobs</NavLink></li>
        <li><NavLink className='no-underline text-lg mx-0   hover:bg-slate-800' to={'/bidsrequest'}>Bids Request</NavLink></li>
        <li><NavLink className='no-underline text-lg mx-0   hover:bg-slate-800' to={'/mybids'}>My Bids</NavLink></li>
        {
            user ? <li><NavLink className='no-underline text-lg mx-0   hover:bg-slate-800' onClick={handleUser}>logout</NavLink></li> : <> <li> <NavLink className='no-underline text-base' to='/login'>login</NavLink></li>
                <li> <NavLink className='no-underline text-base' to='/register'>Register</NavLink></li></>
        }
    </>
    return (
        <div className="navbar flex items-center justify-between bg-zinc-100 shadow-sm p-3">
            <div className="">
                <div className="dropdown bg-zinc-100 block lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <div className="flex items-center ">
                    <img className="w-[40px]" src={iconjob} alt="" />
                    <a className="btn btn-ghost normal-case text-xl">JobSeeker</a>
                </div>
            </div>
            <div className=" hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navlinks
                    }
                </ul>
            </div>
            <div className="">
                {
                    user && <div className="flex items-center">
                        <p className=" mr-2 text-base border-1 border-success rounded p-1">{user?.email}</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navber;