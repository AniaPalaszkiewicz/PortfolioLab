import React, {useEffect, useState} from 'react';
import decoration from "../../../assets/Decoration.svg";
import data from "./data";

let fundations = data.fundations[0];
let organizations = data.fundations[1];
let local = data.fundations[2];

export default function OurHelp() {
    const [objectToShow, setObjectToShow]=useState(fundations);
    const [currentList, setCurrentList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(3);


    const NumbersOfPages = (list) => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(list.length / dataPerPage); i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };
    const handleClick = e => {
        setCurrentPage(e.target.id)
    };

    useEffect(() => {
        setCurrentList(objectToShow.items.slice(dataPerPage * (currentPage - 1), dataPerPage * currentPage))
    }, [currentPage]);

    return (
        <div className="start" id='ourHelp'>
            <div>
                <h1>Komu pomagamy?</h1>
                <img className="decoration" src={decoration} alt=""/>
            </div>
            <div>
                <button onClick={() => setObjectToShow(fundations)}>Fundacjom</button>
                <button onClick={() => setObjectToShow(organizations)}>Organizacjom pozarządowym</button>
                <button onClick={() => setObjectToShow(local)}>Lokalnym zbiórkom</button>

            </div>
            <h1>{objectToShow.desc}</h1>
            <div>
                <ul>
                    {currentList.map((el, ind) => <li key={ind}><h1>{el.header}</h1><h2>{el.subheader}</h2><h3>{el.desc}</h3></li>)}
                </ul>
                <ul id="page-numbers">
                    {NumbersOfPages(objectToShow.items).map(number => {
                        return (
                            <li key={number} id={number} onClick={handleClick}>
                                {number}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}