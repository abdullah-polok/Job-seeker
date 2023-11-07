import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginImage from '../../assets/sign-in-page-abstract-concept-vector-illustration-enter-application-mobile-screen-user-login-form-website-page-interface-ui-new-profile-registra-2J3T8FG-removebg-preview.png'

const Register = () => {
    const [registerError, setRegisterError] = useState('')
    const userInfo = useContext(AuthContext)
    const { createUser } = userInfo
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value
        const password = form.password.value
        const photoURL = form.photoURL.value
        console.log(email, password)

        ///Check password length
        if (password.length < 6) {
            setRegisterError(() => {
                toast('Password should be at least six character or longer')
                return 'Password should be at least six character or longer'
            })
            return;
        }
        // ///check password have any capital letter or not
        if (!/[A-Z]/.test(password)) {
            setRegisterError(() => {
                toast('Password should have at least one upper case letter')
                return 'Password should have at least one upper case letter'
            })

            return;
        }
        // ///check password have any special character or not
        if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
            setRegisterError(() => {
                toast("Password should have at least one special character")
                return "Password should have at least one special character"
            })

            return;
        }
        createUser(email, password)
            .then(res => {
                console.log(res.user)
                toast("Create user successfully")

                //Reset login form
                e.target.reset();

                ///Navigate to Home 
                navigate('/')
            })
            .catch(err => {
                console.log(err.message)
                setRegisterError(err.message)
                toast(err.message)
            })
    }
    return (
        <div className="flex items-center justify-center bg-slate-200">
            <div className="hero w-full ">
                <div className="hero-content flex-col ">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input w-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input w-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input w-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="image link" className="input w-full" required />
                            </div>
                            <div className="form-control mt-6 text-center">
                                <button className="btn btn-primary w-full">Register</button>
                                <ToastContainer></ToastContainer>
                            </div>
                        </form>

                        <p className="p-5">Have a account?<Link to={'/login'} className="text-blue-500">Login</Link></p>
                    </div>
                </div>
            </div>
            <div className="hidden md:block lg:block">
                <img className="w-[1000px]" src={loginImage} alt="" />
            </div>
        </div>
    );
};

export default Register;