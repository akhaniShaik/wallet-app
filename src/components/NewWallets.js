import React, { useState } from "react";

function NewWallets(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [balance, setBalance] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("new wallet added succesfully");

    setName("");
    setPhone("");
    setBalance("");
  }

  return (
    <form style={{ marginTop: "10px" }}>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="tel"
        placeholder="phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Amount"
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
      />
      <br />
      <br />
      <button type="button" class="btn btn-primary" onClick={handleSubmit}>
        Sumbit
      </button>
    </form>
  );
}
export default NewWallets;
