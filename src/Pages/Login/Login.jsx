import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import loginImage from '../../assets/sign-in-page-abstract-concept-vector-illustration-enter-application-mobile-screen-user-login-form-website-page-interface-ui-new-profile-registra-2J3T8FG-removebg-preview.png'
const Login = () => {
    const [loginMes, setLoginMes] = useState('')
    const userInfo = useContext(AuthContext)
    const { signInUser, loginUserPop } = userInfo

    const navigate = useNavigate()

    const handlePopUp = () => {
        loginUserPop()
            .then(user => {
                console.log(user.user)
                navigate('/')
            })
            .catch(err => {
                console.log(err.message)
                setLoginMes(() => {
                    toast(err.message)
                    return err.message
                })
            })
    }
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        console.log(email, password)

        signInUser(email, password)
            .then(res => {
                console.log(res.user)
                e.target.reset()
                navigate('/')

            })
            .catch(err => {
                console.log(err.message)
            })

    }
    return (
        <div className="flex items-center justify-center">
            <div className="hidden md:block lg:block">
                <img className="w-[1000px]" src={loginImage} alt="" />
            </div>
            <div className="hero">
                <div className="hero-content flex-col ">
                    <div className="card flex-shrink-0 w-full">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input w-full text-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input w-full text-white" required />
                            </div>
                            <div className="form-control mt-6 text-center">
                                <button className="btn btn-primary w-full ">Login</button>
                            </div>
                        </form>
                        <button className="btn btn-success mx-4" onClick={handlePopUp}><span className="">Login via Google</span></button>
                        <p className="p-5">Do not have a account?<Link to={'/register'} className="text-blue-500">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;