import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      points: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    };
  }

  getRandomInt = () => Math.floor(Math.random() * Math.floor(6));

  showAnecdote = () => {
    this.setState({ selected: this.getRandomInt() });
  };

  mostPoints = () => Math.max(...Object.values(this.state.points));

  mostPopular = () =>
    Object.keys(this.state.points).find(
      key => this.state.points[key] === this.mostPoints()
    );

  vote = () => {
    this.setState({
      points: {
        ...this.state.points,
        [this.state.selected]: this.state.points[this.state.selected] + 1
      }
    });
  };

  render() {
    return (
      <div>
        <p>{this.props.anecdotes[this.state.selected]}</p>
        <p>
          {"has" + " " + this.state.points[this.state.selected] + " points"}
        </p>
        <button onClick={() => this.vote()}>vote</button>
        <button onClick={() => this.showAnecdote()}>Show anecdote</button>
        <h1>Anecdote with most votes</h1>
        <p>{this.props.anecdotes[this.mostPopular()]}</p>
        {this.mostPoints()}
      </div>
    );
  }
}

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
