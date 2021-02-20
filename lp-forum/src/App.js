import './App.css';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

const { Octokit } = require("@octokit/rest");
const octokit = new Octokit();

function App() {

  octokit.request('GET /repos/WeiningLi/card-forum/issues')
    .then(function (response) {
      console.log(response.data);
    });

  return (
    <div className="site-card-wrapper">
      <span className="title">Models</span>
      <Row>
        <Col span={8} className='center-col'>
          <button className="model-card">
            KNN
          </button>
        </Col>
        <Col span={8} className='center-col'>
          <button className="model-card">
            WWWWWWWW WWWWWWWWWWW WWWW WWWWWW WWWWW WW
          </button>
        </Col>
        <Col span={8} className='center-col'>
          <button className="model-card">
            Regression
          </button>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8} className='center-col'>
          <button className="model-card">
            Random Forest
          </button>
        </Col>
        <Col span={8} className='center-col'>
          <button className="model-card">
          </button>
        </Col>
        <Col span={8} className='center-col'>
          <button className="model-card">
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default App;
