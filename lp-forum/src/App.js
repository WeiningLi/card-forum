import "./styles/App.scss";
import Header from "./components/header";
import React, { Component } from "react";

import { Row, Col } from "antd";
import "antd/dist/antd.css";

const { Octokit } = require("@octokit/rest");
const octokit = new Octokit();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.issues = [];
    this.state = {
      category: "models",
      issues: [],
    };
  }

  componentDidMount() {
    octokit
      .request("GET /repos/WeiningLi/card-forum/issues")
      .then((response) => this.setState({ issues: response.data }));
  }

  drawRows = (issues) => {
    if (issues.length === 0) return null;
    var cols = [];
    issues.forEach( issue => {
      cols.push(
        <Col span={8} className="center-col">
          <button
            className="model-card"
            id={issue.number}
            onClick={(event) => {
              console.log("select model event with id", event.target.id);
              window.location.href="./model?id=" + event.target.id;
            }}
          >{issue.title}</button>
        </Col>
      );
    });
    return cols;
  }

  drawModels = () => {
    const { issues } = this.state;
    var rows = [];
    var i, j, groupedIssues, chunk = 3;
    const openingIssues = issues.filter(issue => issue.state === "open");
    for (i = 0, j = openingIssues.length; i < j; i += chunk) {
      groupedIssues = openingIssues.slice(i, i + chunk);
      rows.push(
        <Row>
          {this.drawRows(groupedIssues)}
        </Row>
      );
    }
    console.log(openingIssues);
    return rows;
  }

  render() {
    return (
      <div>
        <Header />

        <Row>
          <Col span={4}>
            <aside className="menu menu-padding">
              <p className="menu-label">Models</p>
              <ul className="menu-list">
                <li>
                  <a>Model 1</a>
                </li>
                <li>
                  <a>Model 2</a>
                </li>
              </ul>
              <p className="menu-label">Pipelines</p>
              <ul className="menu-list">
                <li>
                  <a>Pipeline 1</a>
                </li>
                <li>
                  <a>Pipeline 2</a>
                </li>
              </ul>
            </aside>
          </Col>
          <Col span={20}>
            <div className="site-card-wrapper">
              <span className="title">Models</span>
              {this.drawModels()}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
