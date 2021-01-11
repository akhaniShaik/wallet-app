import React, { Component } from "react";
import { Table } from "react-bootstrap";
class AllTransactions extends Component {
  render() {
    return (
      <div>
        <div className="conatiner">
          <div>
            <Table hover style={{ width: "700px", margin: "auto" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date&amp;Time</th>
                  <th>Phone</th>
                  <th>Amount </th>
                  <th>Balance(Rs)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>James</td>
                  <td>11 Jan, 10pm </td>
                  <td>7489567428</td>
                  <td>+125</td>
                  <td>500.25</td>
                </tr>
                <tr>
                  <td>Smith</td>
                  <td>12 Jan, 10 am</td>
                  <td>7744853214</td>
                  <td>-200</td>
                  <td>450.01</td>
                </tr>
                <tr>
                  <td>john</td>
                  <td>15 Jan, 6pm</td>
                  <td>9949778810</td>
                  <td>-855</td>
                  <td>12023</td>
                </tr>
                <tr>
                  <td>David</td>
                  <td>25 Jan, 2pm</td>
                  <td>8019448850</td>
                  <td>+1254</td>
                  <td>12582.12</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
export default AllTransactions;
