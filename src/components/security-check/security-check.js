import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Main from "../main/main";
import "./security-check.css";

const SecurityCheck = ({ setLoginUser, user }) => {
  const history = useHistory();
  const [question1, setQ1] = useState("");
  const [question2, setQ2] = useState("");
  const [question3, setQ3] = useState("");
  const [message, setMessage] = useState("");
  function handleSecurityCheck(e) {
    axios
      .post("http://localhost:9002/security-check", {
        ...user,
        question1,
        question2,
        question3,
      })
      .then(function (res) {
        console.log(res.data);
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
    <div>
      <Main />
      <div className="security-check-inner center">
        <div className="security-check">
          <div>{message}</div>

          <input
            type="text"
            name="question1"
            value={question1}
            placeholder="What is Your Favorite Your Food ? "
            onChange={(e) => setQ1(e.target.value)}
          ></input>
          <input
            type="text"
            name="question2"
            value={question2}
            placeholder="What is Your Favorite Singer ?"
            onChange={(e) => setQ2(e.target.value)}
          ></input>
          <input
            type="text"
            name="question3"
            value={question3}
            placeholder="What is Your Primary School Name"
            onChange={(e) => setQ3(e.target.value)}
          ></input>
          <div className="button" onClick={handleSecurityCheck}>
            Make Payment
          </div>
          <div className="button" onClick={logOut}>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityCheck;
