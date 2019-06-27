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
      // name: '',
      // email: '',
      // password: '',
      nextF2: false
    };
  }

  handleClick(event) {
    event.preventDefault();
    const F1data = new FormData(event.target);
    console.log("F1data: ", F1data);
    console.log("event.target ON SUBMIT: ", event.target);
    console.log("event.target.name ON SUBMIT: ", event.target.name);
    console.log(
      "event.target.name.innerHTML ON SUBMIT: ",
      event.target.name.innerHTML
    );
    console.log("event.target.email ON SUBMIT: ", event.target.email);
    console.log("event.target.password ON SUBMIT: ", event.target.password);
    console.log(
      'document.getElementById("form1")',
      document.getElementById("form1")
    );
    let form1 = document.getElementById("form1");

    this.setState({
      // name: event.target.name,
      // email: event.target.email,
      // password: event.target.password,
      nextF2: true
    });
  }

  handleChange() {
    console.log("event.target.value: ", event.target.value);
    // this.setState({
    //   name: event.target.value
    // })
  }

  render() {
    if (this.state.nextF2) {
      return <F2 />;
    } else {
      return (
        <div>
          <form
            id="form1"
            // action="/submit"
            // method="POST"
            onSubmit={event => {
              this.handleClick(event);
            }}
          >
            <label>
              Name:
              <br />
              <br />
              <input
                type="text"
                id="name"
                name="name"
                name={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <br />
            <label>
              Email:
              <br />
              <br />
              <input
                type="email"
                id="email"
                name="email"
                email={this.state.email}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <br />
            <label>
              Password:
              <br />
              <br />
              <input
                type="password"
                id="password"
                name="password"
                password={this.state.password}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <br />
            <input
              type="submit"
              value="Next" /*onSubmit={() => this.setState({ nextF2: true })}*/
            />
          </form>
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

  handleClick(event) {
    event.preventDefault();
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
          <form
            onSubmit={event => {
              this.handleClick(event);
            }}
          >
            <label>
              Mailing Address:
              <br />
              <br />
              <input
                type="text"
                id="line1"
                name="line1"
                name={this.state.line1}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <br />
            <label>
              Address Line 2:
              <br />
              <br />
              <input
                type="text"
                id="line2"
                name="line2"
                name={this.state.line2}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <br />
            <label>
              City:
              <br />
              <br />
              <input
                type="text"
                id="city"
                name="city"
                name={this.state.city}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <br />
            <label>
              State:
              <br />
              <br />
              <input
                type="text"
                id="state"
                name="state"
                name={this.state.state}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <br />
            <label>
              Zip code:
              <br />
              <br />
              <input
                type="text"
                id="zipcode"
                name="zipcode"
                name={this.state.zipcode}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <br />
            <input type="submit" value="Next" />
          </form>
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

  handleClick(event) {
    event.preventDefault();
    this.setState({
      purchase: true
    });
  }

  render() {
    if (this.state.purchase) {
      return <Purchase />;
    } else {
      return (
        <div>
          <form
            onSubmit={event => {
              this.handleClick(event);
            }}
          >
            <label>
              Credit Card #:
              <br />
              <br />
              <input
                type="tel"
                pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
                autocomplete="cc-number"
                id="cc"
                name="cc"
                name={this.state.cc}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <br />
            <label>
              Expiry Date:
              <br />
              <br />
              <input
                type="date"
                autocomplete="cc-exp"
                id="date"
                name="date"
                name={this.state.date}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <br />
            <label>
              CVV:
              <br />
              <br />
              <input
                type="password"
                autocomplete="cc-csc"
                id="cvv"
                name="cvv"
                name={this.state.cvv}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <br />
            <label>
              Billing Zip code:
              <br />
              <br />
              <input
                type="text"
                id="billing"
                name="billing"
                name={this.state.billing}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <br />
            <input type="submit" value="Next" />
          </form>
        </div>
      );
    }
  }
}

class Purchase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finish: false
    };
  }

  handleClick() {
    this.setState({
      finish: true
    });
  }

  render() {
    if (this.state.finish) {
      return <App />;
    } else {
      return (
        <div>
          <button onClick={() => this.setState({ finish: true })}>
            Purchase
          </button>
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById("App"));
