import React, { useState } from "react";
function SpendFunds(props) {
  let [spend, setSpend] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    alert("Spend Fund  succesfully");
    setSpend("");
  }
  return (
    <div>
      <div>
        <div
          className="unselected-field"
          style={{ display: "inline-block", margin: "50px" }}
        >
          <label style={{ marginRight: "130px", fontSize: "20px" }}>
            User :{" "}
          </label>
          <select style={{ margin: "15px", width: "150px" }}>
            <option hidden>Select</option>
            <option>James</option>
            <option>Smith</option>
            <option>John</option>
            <option>David</option>
          </select>
        </div>
        <br />
        <br />
        <h3 style={{ display: "inline-block", marginRight: "80px" }}>
          Amount(Rs) :
        </h3>
        <input
          type="text"
          placeholder="Amount"
          value={spend}
          onChange={(e) => setSpend(e.target.value)}
        />
        <button
          type="button"
          class="btn btn-primary"
          style={{ marginLeft: "50px" }}
          onClick={handleSubmit}
        >
          Sumbit
        </button>
      </div>
    </div>
  );
}

export default SpendFunds;
