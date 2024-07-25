import React from 'react';
import '../component/design/login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button'; // Ensure this is imported

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        axios.post("http://localhost:4000/login", data)
            .then(res => {
                if (res.status === 200) {
                    navigate("/products");
                } else {
                    alert(res.data.msg);
                }
            })
            .catch((error) => {
                console.log(error);
                alert("Invalid user details. Please register.");
            });
    };

    return (
        <div className="login-container">
            <div className="adduser">
                <h3 className='text-primary'>Login</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="adduserform">
                    <div className="inputgroup">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', { required: 'Email is required' })}
                            autoComplete='off'
                            placeholder='Enter your email'
                        />
                        {errors.email && <p className="text-danger">{errors.email.message}</p>}

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            {...register('password', { required: 'Password is required' })}
                            autoComplete='off'
                            placeholder='Enter your password'
                        />
                        {errors.password && 
                        <p className="text-danger">{errors.password.message}</p>}
                        
                        <Button type="submit" className='btn btn-primary mt-3'>Login</Button>
                    </div>
                    <div className="login mt-3">
                        <p>Don't have an account? <Link to='/register'>Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

// import '../component/design/login.css';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useForm } from 'react-hook-form';
// import Button from 'react-bootstrap/Button';

// import { useState, useEffect } from 'react';
// import {  useLocation } from 'react-router-dom';

// export default function Login() {
//   const { state } = useLocation();
//   const from = state?.from || { pathname: '/' };
//   const [redirectToReferrer, setRedirectToReferrer] = useState(false);
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const navigate= useNavigate()
// //   const login = () => {
// //     fakeAuth.authenticate(() => {
// //       setRedirectToReferrer(true);
// //     });
// //   };

//   useEffect(() => {
//     if (redirectToReferrer) {
//       navigate(from.pathname, { replace: true });
//     }
//   }, [redirectToReferrer, navigate, from.pathname]);

//   const onSubmit = (data) => {
//     fakeAuth.authenticate(() => {
//         setRedirectToReferrer(true);
//         axios.post("http://localhost:4000/login", data)
//         .then(res => {
//             if (res.status === 200) {
//             } else {
//                 alert(res.data.msg);
//             }
//         })
//         .catch((error) => {
//             console.log(error);
//             alert("Invalid user details. Please register.");
//         })
  
    
   
//       })

// };
//   return (
//     <div className="login-container">
//     <div className="adduser">
//         <h3 className='text-primary'>Login</h3>
//         <form onSubmit={handleSubmit(onSubmit)} className="adduserform">
//             <div className="inputgroup">
//                 <label htmlFor="email">Email:</label>
//                 <input
//                     type="email"
//                     id="email"
//                     {...register('email', { required: 'Email is required' })}
//                     autoComplete='off'
//                     placeholder='Enter your email'
//                 />
//                 {errors.email && <p className="text-danger">{errors.email.message}</p>}

//                 <label htmlFor="password">Password:</label>
//                 <input
//                     type="password"
//                     id="password"
//                     {...register('password', { required: 'Password is required' })}
//                     autoComplete='off'
//                     placeholder='Enter your password'
//                 />
//                 {errors.password && 
//                 <p className="text-danger">{errors.password.message}</p>}
                
//                 <Button type="submit" className='btn btn-primary mt-3'>Login</Button>
//             </div>
//             <div className="login mt-3">
//                 <p>Don't have an account? <Link to='/register'>Register</Link></p>
//             </div>
//         </form>
//     </div>
// </div>
//   );
// }

// /* A fake authentication function */
// export const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100);
//   },
//    signout(cb) {
//         this.isAuthenticated = false;
//         setTimeout(cb, 100);
//     }

// };