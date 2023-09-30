import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";


export default function Register() {

  const { user , createUser } = useContext(AuthContext)

    
    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
        .then(result => console.log(result.user))
        .catch(error => console.log(error))


    }

  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl font-bold"> Register now!</h1>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">

  
          <form onSubmit={handleRegister}>
  
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Name </span>
            </label>
            <input type="text" placeholder="Your Name " name='name' required className="input input-bordered" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name='email' required className="input input-bordered" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" name='password' required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary"> Register </button>
          </div>
          </form>
  
          <p className="text-sm"> Already Have An Account? <Link to='/login' className="text-blue-600 underline"> Login </Link></p>
  
        </div>
      </div>
    </div>
  </div>
  )
}
