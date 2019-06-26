// see if babel is working
console.log("Hi darlin");

// import React
// import React from 'react'; // don't need this for some reason, because index.html calls react scripts

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkingOut: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      checkingOut: true
    });
  }

  render() {
    //     return (
    //       <div id="cowboy" style={{ flex: 1 }}>
    //         <h2>Howdy, fool</h2>
    //         <br />
    //         <img src="cowboy.jpg" alt="Italian Trulli" />
    //       </div>
    //     );
    return (
      <div>
        <button onClick={this.handleClick}>Checkout</button>
        {this.state.checkingOut ? <F1 /> : null}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("App"));
