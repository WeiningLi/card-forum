import "./styles/App.scss";
import Header from "./components/header";

import { Row, Col } from "antd";
import "antd/dist/antd.css";

const { Octokit } = require("@octokit/rest");
const octokit = new Octokit();

function App() {
  octokit
    .request("GET /repos/WeiningLi/card-forum/issues")
    .then(function (response) {
      console.log(response.data);
    });

  return (
    <div>
      <Header />

      <Row>
        <Col span={4}>
          <aside class="menu menu-padding">
            <p class="menu-label">General</p>
            <ul class="menu-list">
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Customers</a>
              </li>
            </ul>
          </aside>
        </Col>
        <Col span={20}>
          <div className="site-card-wrapper">
            <span className="title">Models</span>
            <Row>
              <Col span={8} className="center-col">
                <button className="model-card">KNN</button>
              </Col>
              <Col span={8} className="center-col">
                <button className="model-card">
                  WWWWWWWW WWWWWWWWWWW WWWW WWWWWW WWWWW WW
                </button>
              </Col>
              <Col span={8} className="center-col">
                <button className="model-card">Regression</button>
              </Col>
            </Row>
            <Row>
              <Col span={8} className="center-col">
                <button className="model-card">Random Forest</button>
              </Col>
              <Col span={8} className="center-col">
                <button className="model-card"></button>
              </Col>
              <Col span={8} className="center-col">
                <button className="model-card"></button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
