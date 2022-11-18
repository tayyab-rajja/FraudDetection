import React from "react";
import "./txn-success.css";
import Main from "../main/main";
import { useHistory } from "react-router-dom";
import axios from "axios";
const TxnSuccess = ({ setLoginUser }) => {
  const history = useHistory();
  function logOut() {
    axios.get("http://localhost:9002/logout").then(function (res) {
      setLoginUser({});
      history.push("/");
    });
  }
  return (
    <div>
      <Main />
      <div className="success-inner center">
        <div className="success">
          <div>Your transaction was successful.</div>

          <div className="button" onClick={() => history.push("/")}>
            Make Another Payment
          </div>
          <div className="button" onClick={logOut}>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default TxnSuccess;
