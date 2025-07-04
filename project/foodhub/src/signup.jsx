import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backgroundImage from './assets/background.jpg';


export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
  const newErrors = {};

  if (!formData.email.trim()) newErrors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";

  if (!formData.password) newErrors.password = "Password is required";
  else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";


  if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm your password";
  else if (formData.confirmPassword !== formData.password)
    newErrors.confirmPassword = "Passwords do not match";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


 const handleSubmit = (e) => {
  e.preventDefault();

  const isValid = validateForm();

  if (!isValid) {
    return;
  }

  axios.post("http://localhost:5000/register", formData)
    .then((res) => {
      console.log("Signup success:", res.data);
      alert("Signup successful!");
      navigate("/login");
    })
    .catch((error) => {
      console.error("Signup error:", error);
      alert("Signup failed. Please try again.");
    });
};





  return (
    <>
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
          }

          .background-image {
            
            
            
      
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          .card {
            background-color: white;
            border-radius: 1rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            width: 100%;
            max-width: 400px;
            
            padding: 2rem;
          }

          

          .form-header {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 2rem;
          }

          .switch-tab {
            font-size: 2rem;
            font-weight: 500;
            
          }

          
          .inactive-tab {
            color: #9ca3af;
          }

          .form-control {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            border: none;
          }

          .form-control label {
            font-size: 0.875rem;
            font-weight: 500;
            color: #4b5563;
          }

          .form-control input {
            width: 100%;
            padding: 0.75rem 1rem;
            border: 1px solid #d1d5db;
            border-radius: 0.5rem;
            outline: none;
            
            font-size: 1rem;
          }

          .form-control input:focus {
            border-color: #6366f1;
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
          }

          .error-message {
            color: #ef4444;
            font-size: 0.75rem;
            margin-top: 0.25rem;
          }

          .submit-button {
            width: 100%;
            background-color:rgb(0, 0, 0);
            color: white;
            padding: 0.75rem;
            border-radius: 0.5rem;
            font-weight: 600;
            border: none;
            
            cursor: pointer;
            font-size: 1rem;
          }

          

          .footer-text {
            text-align: center;
            font-size: 0.875rem;
            color: #4b5563;
          }

          .toggle-link {
            background-color: black;
            color: black;
            font-weight: 600;
            margin-left: 0.25rem;
            cursor: pointer;
            
            border: none;
            color: black;
            background-color: white;
          }

          

          /* Responsive adjustments */
          @media (max-width: 480px) {
            .form-header {
              flex-direction: column;
              align-items: flex-start;
              gap: 1rem;
            }

            .switch-tab {
              font-size: 1.125rem;
            }

            .card {
              padding: 1rem;
            }

            .submit-button {
              font-size: 0.95rem;
            }
          }
        `}
      </style>

      <div
        className="background-image"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
        }}
      >
        <div className="card p-6 sm:p-8">
          <div className="form-header">
            <h2 className="switch-tab active-tab">Signup</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>

            <div className="form-control">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <p className="error-message">{errors.confirmPassword}</p>
              )}
            </div>
            <br />

            <button type="submit" className="submit-button" href="http://localhost:5173/login">
              Create Account
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-gray-200 bg-gray-50 px-4 py-3">
            <p className="footer-text">
              Already have an account?
              <a
                className="toggle-link"
                href="http://localhost:5173/login"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
