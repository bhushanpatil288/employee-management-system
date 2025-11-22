import { useState, useContext } from "react"
import { Button } from "../components/common"
import { useNavigate } from "react-router-dom";
import AuthContext from "../Auth/AuthContext.js";

function Signin() {
    const {user, setUser} = useContext(AuthContext)
    const [emailState, setEmailState] = useState('');
    const [passwordState, setPasswordStat] = useState('');

    const navigate = useNavigate();

    function handleForm(e){
        e.preventDefault();
        if(emailState === 'admin@example.com' && passwordState === '123'){
            console.log("valid user");
            setUser('admin');
            navigate('/admin-dashboard');
        } else {
            console.log("Invalid user");
        }
    }

    return (
        <div className="flex justify-center">
        <form onSubmit={handleForm} className="flex flex-col gap-5 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 my-20">
            <div className="flex flex-col gap-2">
                <label htmlFor="LoginEmail" className="font-bold text-neutral-600">Email</label>
                <input 
                    value={emailState}
                    onChange={(e)=>(setEmailState(e.target.value))}
                    required
                    id="LoginEmail"
                    className="shadow border border-neutral-200 px-3 py-2 rounded-lg outline-none"
                    type="email" 
                    placeholder="Email"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="LoginPassword" className="font-bold text-neutral-600">Password</label>
                <input
                    value={passwordState}
                    onChange={(e)=>{setPasswordStat(e.target.value)}}
                    required
                    id="LoginPassword"
                    className="shadow border border-neutral-200 px-3 py-2 rounded-lg outline-none"
                    type="password"
                    placeholder="Enter your password"
                />
            </div>
            <div className="flex justify-center">
                <Button text='Sign in' />   
            </div>
        </form>
        </div>
    )
}

export default Signin
