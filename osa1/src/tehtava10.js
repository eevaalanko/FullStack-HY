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

  positiivistenMaara = () =>
    this.yhteensa() !== 0
      ? Math.round(this.state.hyva / this.yhteensa() * 10000) / 100
      : 0;

  lisaaArvo = (name, value) => () => this.setState({ [name]: value + 1 });

  render() {
    return (
      <div>
        <h1>Anna palautetta</h1>
        <Button text="hyvä" add={this.lisaaArvo("hyva", this.state.hyva)} />
        <Button
          text="neutraali"
          add={this.lisaaArvo("neutraali", this.state.neutraali)}
        />
        <Button text="huono" add={this.lisaaArvo("huono", this.state.huono)} />
        {this.yhteensa}
        {this.yhteensa() !== 0 && (
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
