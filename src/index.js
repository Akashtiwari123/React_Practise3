import React from "react";
import ReactDOM from "react-dom";
import Conditional from "./Conditional"
import "./styles.css";

class App extends React.Component {
  constructor(){
    super()
    this.state={
      isLoading:true
    }
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        isLoading:false
      })
    },1000)
  }

  render(){
  return (
    <div className="App">
      <h2>CodeSandbox</h2>
      <Conditional isLoading={this.state.isLoading}/>
    </div>
  )
}
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
