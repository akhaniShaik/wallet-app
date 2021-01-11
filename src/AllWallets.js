import React, { Component } from "react";
import { Table } from "react-bootstrap";

class AllWallets extends Component {
  render() {
    return (
      <div className="conatiner">
        <div>
          <Table hover style={{ width: "700px", margin: "auto" }}>
            <thead>
              <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Balance(Rs)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Usr 1</td>
                <td>James</td>
                <td>7489567428</td>
                <td>500.25</td>
              </tr>
              <tr>
                <td>Usr 2</td>
                <td>Smith</td>
                <td>7744853214</td>
                <td>450.01</td>
              </tr>
              <tr>
                <td>Usr 3</td>
                <td>john</td>
                <td>9949778810</td>
                <td>12023</td>
              </tr>
              <tr>
                <td>Usr 4</td>
                <td>David</td>
                <td>8019448850</td>
                <td>1802.12</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
export default AllWallets;
