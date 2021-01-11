import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddFunds from "./AddFunds";
import AllTransactions from "./AllTransactions";
import AllWallets from "./AllWallets";
import CheckBalance from "./CheckBalance";
import NewWallets from "./NewWallets";
import SpendFunds from "./SpendFunds";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faMinusCircle,
  faClipboardList,
  faMarker,
  faUserCheck,
  faRupeeSign,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar.Brand href="">
          <FontAwesomeIcon
            icon={faRupeeSign}
            style={{ color: "#66ccff", marginRight: "4px" }}
          />
          Personal Wallet UI
        </Navbar.Brand>
        <Navbar bg="light" expand="sm">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto " fill variant="tabs" eventKey="link-1">
              <Nav.Link href="#link" defaultActiveKey="/All">
                <Link to="/All">
                  <FontAwesomeIcon
                    icon={faWallet}
                    style={{ color: " #669999", marginRight: "4px" }}
                  />
                  All Wallets
                </Link>
              </Nav.Link>

              <Nav.Link href="#link" eventKey="link-1">
                <Link to="/New">
                  <FontAwesomeIcon
                    icon={faMarker}
                    style={{ color: "#00ff40", marginRight: "4px" }}
                  />
                  New Wallets
                </Link>
              </Nav.Link>

              <Nav.Link href="#link" eventKey="link-2">
                <Link to="/Check">
                  <FontAwesomeIcon
                    icon={faUserCheck}
                    style={{ color: "#cc66ff", marginRight: "4px" }}
                  />
                  Check Balance
                </Link>
              </Nav.Link>

              <Nav.Link href="#link" eventKey="link-3">
                <Link to={"/Add"}>
                  <FontAwesomeIcon
                    icon={faPlusCircle}
                    style={{ color: "green", marginRight: "4px" }}
                  />
                  Add Funds
                </Link>
              </Nav.Link>

              <Nav.Link href="#link" eventKey="link-4">
                <FontAwesomeIcon
                  icon={faMinusCircle}
                  style={{ color: "blue", marginRight: "4px" }}
                />
                <Link to="/Spend">Spend Funds</Link>
              </Nav.Link>

              <Nav.Link href="#link" eventKey="link-5">
                <Link to="/Trans">
                  <FontAwesomeIcon
                    icon={faClipboardList}
                    style={{ color: "#ff0000", marginRight: "4px" }}
                  />
                  All Transactions
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/All">
          <AllWallets />
        </Route>
        <Route path="/New">
          <NewWallets />
        </Route>
        <Route path="/Check">
          <CheckBalance />
        </Route>
        <Route path="/Add">
          <AddFunds />
        </Route>
        <Route path="/Spend">
          <SpendFunds />
        </Route>
        <Route path="/Trans">
          <AllTransactions />
        </Route>
      </Router>
    </div>
  );
}

export default App;
