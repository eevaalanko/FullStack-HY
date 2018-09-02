import React from "react";
import ReactDOM from "react-dom";

const Otsikko = props => <h1>{props.nimi}</h1>;

const Sisalto = props => (
  <div>
    <p>
      {props.kuvaus1} {props.maara1}
    </p>
    <p>
      {props.kuvaus2} {props.maara2}
    </p>
    <p>
      {props.kuvaus3} {props.maara3}
    </p>
  </div>
);

const Yhteensa = props => <p>yhteensä {props.summa} tehtävää</p>;

const App = () => {
  const kurssi = "Half Stack -sovelluskehitys";
  const osa1 = "Reactin perusteet";
  const tehtavia1 = 10;
  const osa2 = "Tiedonvälitys propseilla";
  const tehtavia2 = 7;
  const osa3 = "Komponenttien tila";
  const tehtavia3 = 14;

  return (
    <div>
      <Otsikko nimi={kurssi} />
      <Sisalto
        kuvaus1={osa1}
        maara1={tehtavia1}
        kuvaus2={osa2}
        maara2={tehtavia2}
        kuvaus3={osa3}
        maara3={tehtavia3}
      />
      <Yhteensa summa={tehtavia1 + tehtavia2 + tehtavia3} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
