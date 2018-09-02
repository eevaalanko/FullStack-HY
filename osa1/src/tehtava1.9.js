import React from "react";
import ReactDOM from "react-dom";

const Button = props => (
  <button type="button" onClick={props.add}>
    {props.text}
  </button>
);

const Statistic = props =>
  props.value === "positiivistenMaara" ? (
    <p>{props.text + " " + props.value + " %"}</p>
  ) : (
    <p>{props.text + " " + props.value}</p>
  );

const Statisitics = props => (
  <div>
    <h1>Statistiikka</h1>
    <Statistic text="hyvä" value={props.hyva} />
    <Statistic text="neutraali" value={props.neutraali} />
    <Statistic text="huono" value={props.huono} />
    <Statistic text="keskiarvo" value={props.keskiarvo} />
    <Statistic text="positiivisia" value={props.positiivistenMaara} />
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    };
  }

  yhteensa = () => this.state.hyva + this.state.neutraali + this.state.huono;

  keskiarvo = () =>
    this.yhteensa() !== 0
      ? Math.round(
          (this.state.hyva - this.state.huono) / this.yhteensa() * 100
        ) / 100
      : 0;

  positiivistenMaara() {
    if (this.yhteensa() !== 0) {
      return Math.round(this.state.hyva / this.yhteensa() * 10000) / 100;
    }
    return 0;
  }
  lisaaHyva = () => this.setState({ hyva: this.state.hyva + 1 });
  lisaaNeutraali = () => this.setState({ neutraali: this.state.neutraali + 1 });
  lisaaHuono = () => this.setState({ huono: this.state.huono + 1 });

  render() {
    return (
      <div>
        <h1>Anna palautetta</h1>
        <Button text="hyvä" add={this.lisaaHyva} />
        <Button text="neutraali" add={this.lisaaNeutraali} />
        <Button text="huono" add={this.lisaaHuono} />
        {this.yhteensa}
        {(this.yhteensa() !== 0) && (
          <Statisitics
            hyva={this.state.hyva}
            neutraali={this.state.neutraali}
            huono={this.state.huono}
            keskiarvo={this.keskiarvo()}
            positiivistenMaara={this.positiivistenMaara()}
          />
        )}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
