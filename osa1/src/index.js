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
        <Osa kuvaus={props.osat[0].nimi} maara={props.osat[0].tehtavia} />
        <Osa kuvaus={props.osat[1].nimi} maara={props.osat[1].tehtavia} />
        <Osa kuvaus={props.osat[2].nimi} maara={props.osat[2].tehtavia} />
    </div>
);

const Yhteensa = props => (
    <p>
        {"yhteensa "}
        {props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia}
        {" tehtavaa"}
    </p>
);

const App = () => {
    const kurssi = {
        nimi: "Half Stack -sovelluskehitys",
        osat: [
            {
                nimi: "Reactin perusteet",
                tehtavia: 10
            },
            {
                nimi: "Tiedonvälitys propseilla",
                tehtavia: 7
            },
            {
                nimi: "Komponenttien tila",
                tehtavia: 14
            }
        ]
    };

    return (
        <div>
            <Otsikko nimi={kurssi.nimi} />
            <Sisalto osat={kurssi.osat} />
            <Yhteensa osat={kurssi.osat} />
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById("root"));
