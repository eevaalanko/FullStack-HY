import React from "react";
import ReactDOM from "react-dom";

const Otsikko = props => <h1>{props.nimi}</h1>;

const Osa = props => (
    <p>
        {props.kuvaus} {props.maara}
    </p>
);

const Sisalto = props => (
    <div>
        <Osa kuvaus={props.osa1.nimi} maara={props.osa1.tehtavia} />
        <Osa kuvaus={props.osa2.nimi} maara={props.osa2.tehtavia} />
        <Osa kuvaus={props.osa3.nimi} maara={props.osa3.tehtavia} />
    </div>
);

const Yhteensa = props => <p>yhteensä {props.summa} tehtävää</p>;

const App = () => {
    const kurssi = "Half Stack -sovelluskehitys";
    const osa1 = {
        nimi: "Reactin perusteet",
        tehtavia: 10
    };
    const osa2 = {
        nimi: "Tiedonvälitys propseilla",
        tehtavia: 7
    };
    const osa3 = {
        nimi: "Komponenttien tila",
        tehtavia: 14
    };

    return (
        <div>
            <Otsikko nimi={kurssi} />
            <Sisalto osa1={osa1} osa2={osa2} osa3={osa3} />
            <Yhteensa summa={osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
