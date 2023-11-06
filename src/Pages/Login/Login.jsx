import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
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
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <button onClick={handlePopUp}>Login via Google</button>
                    <p className="p-5">Do not have a account?<Link to={'/register'} className="text-blue-500">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;