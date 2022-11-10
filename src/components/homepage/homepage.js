import React from "react";
import "./homepage.css";
import Main from "../main/main";
import { useState, useEffect } from "react";

const Homepage = ({ setLoginUser }) => {
  //   const [items, setItems] = useState([]);

  useEffect(() => {
    const newuser = JSON.parse(localStorage.getItem("user"));
    console.log("userrr", newuser);
  });


  //   const [user, setUser] = useState({
  //     name: "",
  //     cardNo: "",
  //     cvc: "",
  //     expiry: "",
  //     amount: "",
  //   });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setUser({
  //       ...user,
  //       [name]: value,
  //     });
  //   };

  return (
    <>
      <Main />
      <div className="signup-inner center">
        <div className="register">
          <h1>PAYMENT FORM</h1>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
          ></input>
          {/* <input
            type="number"
            name="cardNo"
            placeholder="Enter Your Card No"
          ></input>
          <input type="number" name="cvc" placeholder="Enter Your CVC"></input>
          <input type="number" name="amount" placeholder="Enter Amount"></input> */}
          <div className="button" onClick={""}>
            PAY
          </div>
          <div className="button" onClick={() => setLoginUser({})}>
            Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
