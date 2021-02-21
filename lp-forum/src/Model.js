import './Model.css';
import React, {Component} from "react";

export default class Comments extends Component {

  constructor(props){ 
    super(props);
    this.commentBox = React.createRef();
  }

  componentDidMount () {
      let script = document.createElement("script");
      script.setAttribute("src", "https://utteranc.es/client.js");
      script.setAttribute("repo", "WeiningLi/card-forum");
      script.setAttribute("issue-term", "a model1");
      script.setAttribute( "theme", "github-light");
      script.setAttribute("crossorigin","anonymous");
      script.setAttribute("async", true);
      this.commentBox.current.appendChild(script);
  }

  render() {
    return (
      <p>
        <div ref={this.commentBox} className="comment-box"></div>
        </p>
    );
  }
}