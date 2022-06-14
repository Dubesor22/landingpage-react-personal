import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  let contactInfo = JSON.parse(localStorage.getItem("USERS")) || [];
  const saveData = () => {
    contactInfo.push(data);
    localStorage.setItem("USERS", JSON.stringify(contactInfo));
  };

  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const clearState = () => {
    setData({ ...initialState });
  };

  const [btnDisabled, setBtnDisabled] = useState(true);

  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    if (data.name.length < 2) {
      setMessage("");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveData();
    console.log(
      "sending data..." + data.name + " " + data.email + " " + data.message
    );
    clearState();
  };

  return (
    <div className="contact" id="contact">
      <div class="login-box">
        <h2>Contactemos</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div class="user-box">
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleInputChange}
            />
            <label>Nombre</label>
          </div>
          <div class="user-box">
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={handleInputChange}
            />
            <label>email</label>
          </div>
          <div class="user-box">
            <input
              type="text"
              name="message"
              value={data.message}
              onChange={handleInputChange}
            />
            <label>Mensage</label>
          </div>
          <button class="btn" type="submit" disabled={btnDisabled}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Enviar
          </button>
        </form>
        {message}
      </div>
    </div>
  );
};

export default Contact;
