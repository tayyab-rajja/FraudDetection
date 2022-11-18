import React from "react";
import "./homepage.css";
import Main from "../main/main";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

axios.defaults.withCredentials = true;

const Homepage = ({ setLoginUser, user }) => {
  const history = useHistory();
  const [val, setVal] = useState(user);
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  function handlePayment() {
    axios
      .post("http://localhost:9002/payment", {
        ...val,
        amount,
      })
      .then(function (res) {
        if (res.data.success) history.push(res.data.redirect);
        else setMessage(res.data.message);
      });
  }

  function logOut() {
    axios.get("http://localhost:9002/logout").then(function (res) {
      history.push("/");
    });
    setLoginUser({});
  }

  return (
    <>
      <Main />
      <div className="signup-inner center">
        <div className="register">
          <h1>PAYMENT FORM</h1>
          <div>{message}</div>
          <input
            type="text"
            name="name"
            value={val.name}
            placeholder="Your Name"
            onChange={(e) => setVal({ ...val, name: e.target.value })}
          ></input>
          <input
            type="number"
            name="cardNo"
            value={val.cardNo}
            placeholder="Enter Your Card No"
            onChange={(e) => setVal({ ...val, cardNo: e.target.value })}
          ></input>
          <input
            type="number"
            name="cvc"
            value={val.cvc}
            placeholder="Enter Your CVC"
            onChange={(e) => setVal({ ...val, cvc: e.target.value })}
          ></input>
          <input
            type="number"
            name="amount"
            placeholder="Enter Amount"
            onChange={(e) => setAmount(e.target.value)}
            required
          ></input>
          {/* <input
            type="number"
            name="amount"
            value={amount}
            placeholder="Amount"
            onChange={handleChange}
          ></input> */}
          <div className="button" onClick={handlePayment}>
            PAY
          </div>
          <div className="button" onClick={logOut}>
            Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
