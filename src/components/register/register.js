import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Main from "../main/main";

const Register = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    cardNo: "",
    cvc: "",
    expiry: "",
    question1: "",
    question2: "",
    question3: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const {
      name,
      email,
      password,
      reEnterPassword,
      cardNo,
      cvc,
      expiry,
      question1,
      question2,
      question3,
    } = user;
    if (
      name &&
      email &&
      password &&
      cardNo &&
      expiry &&
      cvc &&
      question1 &&
      question2 &&
      question3 &&
      password === reEnterPassword
    ) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data.message);
        localStorage.setItem("user",JSON.stringify(user))
        console.log('usersssssss',user)
        history.push("/login");
      });
    } else {
      alert("Invalid Input");
    }
  };
  
  return (
    <>
      <Main />
      <div className="signup-inner center">
        <div className="register">
          {console.log("User", user)}
          <h1>REGISTER</h1>
          <input
            type="text"
            name="name"
            value={user.name}
            placeholder="Your Name"
            onChange={handleChange}
          ></input>
          <input
            type="email"
            name="email"
            value={user.email}
            placeholder="Your Email"
            onChange={handleChange}
          ></input>
          <input
            maxLength={12}
            type="text"
            name="cardNo"
            value={user.cardNo}
            placeholder="Enter Your Card No"
            onChange={handleChange}
          ></input>
          <input
            maxLength={3}
            type="text"
            name="cvc"
            value={user.cvc}
            placeholder="Enter Your CVC"
            onChange={handleChange}
          ></input>
          <input
            type="date"
            name="expiry"
            value={user.expiry}
            placeholder="Expiry"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="question1"
            value={user.question1}
            placeholder="What is Your Favorite Your Food ? "
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="question2"
            value={user.question2}
            placeholder="What is Your Favorite Singer ?"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="question3"
            value={user.question3}
            placeholder="What is Your Primary School Name"
            onChange={handleChange}
          ></input>
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Your Password"
            onChange={handleChange}
          ></input>
          <input
            type="password"
            name="reEnterPassword"
            value={user.reEnterPassword}
            placeholder="Re-enter Password"
            onChange={handleChange}
          ></input>
          <div className="button" onClick={register}>
            Register
          </div>
          <div>or</div>
          <div className="button" onClick={() => history.push("/login")}>
            Login
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
