import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "./assets/background.jpg";




export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    alert("Login successful");
    navigate("/home");
  };

  const styles = {
    body: {
      margin: 0,
      fontFamily: "quivert",
      background: "linear-gradient(to right, #667eea, #764ba2)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      transition: "transform 0.3s ease, boxShadow 0.3 ease"
      
    },

  

    container: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "12px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      width: "90%",
      maxWidth: "400px",
    },
    heading: {
      textAlign: "center",
      marginBottom: "1.5rem",
    },
    formGroup: {
      marginBottom: "1rem",
    },
    label: {
      display: "block",
      marginBottom: "0.5rem",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "0.75rem",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "1rem",
      outline: "none",
    },
    error: {
      color: "#ef4444",
      fontSize: "0.85rem",
      marginTop: "0.25rem",
    },
    button: {
      width: "100%",
      backgroundColor: "black",
      color: "#fff",
      padding: "0.75rem",
      borderRadius: "6px",
      fontWeight: "600",
      border: "none",
      fontSize: "1rem",
      cursor: "pointer",
      transition: " 0.3s ease",
    },

  
    footer: {
      marginTop: "1.5rem",
      textAlign: "center",
      fontSize: "0.9rem",
      color: "#555",
    },
    link: {
      color: "black",
      textDecoration: "none",
      fontWeight: "600",
      marginLeft: "5px",
    },
  };

  return (
    <div style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
              display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
            }}>
      <form style={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <h2 style={styles.heading}>Login</h2>

        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email",
              },
            })}
            style={styles.input}
          />
          {errors.email && <p style={styles.error}>{errors.email.message}</p>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Too short",
              },
            })}
            style={styles.input}
          />
          {errors.password && (
            <p style={styles.error}>{errors.password.message}</p>
          )}
        </div>

        <button type="submit" style={styles.button}>
          Login
        </button>

        <div style={styles.footer}>
          Don't have an account?
          <Link to="/signup" style={styles.link}>
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
