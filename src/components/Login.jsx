import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {

      const data = await axios.post(BASE_URL + "/login", {
        emailId, 
        password
      }, {withCredentials: true});
      //console.log(data);
      dispatch(addUser(data.data));
      navigate('/');
    } catch(e) {
      console.log(e.message);
    }
  }

  return (
    <div className="flex justify-center my-10"><div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Login</h2>
        <div>
          <label className="floating-label mt-5">
            <span>Email</span>
            <input type="text" placeholder="Email" className="input input-md" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
          </label>
          <label className="floating-label mt-5">
            <span>Password</span>
            <input type="password" placeholder="Password" className="input input-md" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>
        <div className="card-actions justify-center mt-3">
          <button className="btn btn-primary" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div></div>
  )
}

export default Login