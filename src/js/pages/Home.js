import React from "react";


export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
    };
  }
   changeTitle(title) {
    this.setState({title});
  }
  handleChange(e) {
    const title = document.getElementById("Feed").value;
    this.setState({title});
    console.log(this.state.title)
    
   }

  render() {
    const containerStyle = {
      "float": "right"
    };
    
    console.log("home");
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <textarea rows="5" cols="62" id="Feed">What's on your mind?</textarea>
          </div>
          <div class="col-lg-5">
            <button class="btn btn-default" onClick={this.handleChange.bind(this)} style={containerStyle}>Post</button>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            {this.state.title}
          </div> 
        </div>
      </div>
    );
  }
}
