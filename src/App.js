import React, {Component, Fragment} from "react";



// Creating Element
// el = React.createElement("h1", null, "This is Element");

// Creating Class Component
class App extends Component {
  render(){
    // return React.createElement("h1", null, "Hello Prakash");

    // Using Jsx
    return (
      <Fragment>
        <h1>"Hello Prakash"</h1>
        <h2>"I am learning React"</h2>
      </Fragment>
      
    )
  }
}



export default App;
