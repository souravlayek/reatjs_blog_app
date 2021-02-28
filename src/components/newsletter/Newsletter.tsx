import { emitWarning } from "process";
import React, { useState } from "react";
import "./css/newsletter.css";
interface Props {}

const Newsletter = (props: Props) => {
  const [email, setEmail] = useState("");
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
  };
  return (
    <div className="newsletter">
      <div className="heading">Newsletter</div>
      <div className="smallDevider"></div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          className="emailField"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className="submitBtn" type="submit" value="Subscribe!" />
      </form>
    </div>
  );
};

export default Newsletter;
