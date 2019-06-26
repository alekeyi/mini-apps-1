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
    if (this.state.checkingOut) {
      return <F1 />;
    } else {
      return (
        <div>
          <button onClick={this.handleClick}>Checkout</button>
        </div>
      );
    }
  }
}

class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextF2: false
    };
  }

  handleClick() {
    this.setState({
      nextF2: true
    });
  }

  render() {
    if (this.state.nextF2) {
      return <F2 />;
    } else {
      return (
        <div>
          <button onClick={() => this.setState({ nextF2: true })}>Next</button>
        </div>
      );
    }
  }
}

class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextF3: false
    };
  }

  handleClick() {
    this.setState({
      nextF3: true
    });
  }

  render() {
    if (this.state.nextF3) {
      return <F3 />;
    } else {
      return (
        <div>
          <button onClick={() => this.setState({ nextF3: true })}>Next</button>
        </div>
      );
    }
  }
}

class F3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      purchase: false
    };
  }

  handleClick() {
    this.setState({
      purchase: true
    });
  }

  render() {
    if (this.state.purchase) {
      return <App />;
    } else {
      return (
        <div>
          <button onClick={() => this.setState({ purchase: true })}>
            Purchase
          </button>
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById("App"));
