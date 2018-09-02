import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hyva: 1,
      neutraali: 1,
      huono: 1
    };
  }
  render() {
    return (
      <div>
        <h1>Anna palautetta</h1>
        <button
          type="button"
          onClick={() => this.setState({ hyva: this.state.hyva + 1 })}
        >
          hyvä
        </button>
        <button
          type="button"
          onClick={() => this.setState({ neutraali: this.state.neutraali + 1 })}
        >
          neutraali
        </button>
        <button
          type="button"
          onClick={() => this.setState({ huono: this.state.huono + 1 })}
        >
          huono
        </button>
        <h1>Statistiikka</h1>
        <p>
          {"hyvä "} {this.state.hyva}
        </p>
        <p>
          {"neutraali "} {this.state.neutraali}
        </p>
        <p>
          {"huono "} {this.state.huono}
        </p>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
