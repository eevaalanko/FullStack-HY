import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    };
  }

  yhteensa() {
    return this.state.hyva + this.state.neutraali + this.state.huono;
  }

  keskiarvo() {
    if (this.yhteensa() !== 0) {
      return (this.state.hyva - this.state.huono) / this.yhteensa();
    }
    return 0;
  }

  positiivistenMaara() {
    if (this.yhteensa() !== 0) {
      return Math.round(this.state.hyva / this.yhteensa() * 10000)/100;
    }
    return 0;
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
        <p>
          {"keskiarvo "} {this.keskiarvo()}
        </p>
        <p>
          {"positiivisia "} {this.positiivistenMaara()} {" %"}
        </p>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
