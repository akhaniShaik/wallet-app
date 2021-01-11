import React, { useState } from "react";

function CheckBalance(props) {
  return (
    <div>
      <div
        className="unselected-field"
        style={{ display: "inline-block", margin: "50px" }}
      >
        <label style={{ marginRight: "30px", fontSize: "20px" }}>User : </label>
        <select style={{ margin: "5px", width: "150px" }}>
          <option hidden>Select</option>
          <option>James</option>
          <option>Smith</option>
          <option>John</option>
          <option>David</option>
        </select>
      </div>
      <button
        type="button"
        class="btn btn-primary"
        style={{ marginTop: "150px" }}
      >
        Get Balance
      </button>
    </div>
  );
}

export default CheckBalance;
