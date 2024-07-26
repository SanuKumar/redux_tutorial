import React, { useState } from "react";
import Loader from "../../components/loader";
import axios from "axios";
import { userApi } from "../../api_url";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const handleInput = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { email, password } = formData;
      const res = await axios.post(`${userApi}/login`, { email, password });
      const response = res.data;
      setLoading(false);
      if (response.name) {
        localStorage.user = JSON.stringify(response);
        navigate(`/product/:${response._id}`);
        window.location.reload();
        // navigate("/", { state: { response } });
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleLogin}>
      <div className='App'>Login Page</div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          onChange={handleInput}
          name='email'
          value={formData.email}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          type='text'
          onChange={handleInput}
          name='password'
          value={formData.password}
        />
      </div>
      <div>{loading ? <Loader /> : <button type='submit'>Login</button>}</div>
    </form>
  );
};

export default Login;
