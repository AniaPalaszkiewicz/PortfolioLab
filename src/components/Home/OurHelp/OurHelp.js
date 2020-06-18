import React, {useEffect, useState} from 'react';
import decoration from "../../../assets/Decoration.svg";
import data from "./data";

let fundations = data.fundations[0];
let organizations = data.fundations[1];
let local = data.fundations[2];

export default function OurHelp() {
    const [objectToShow, setObjectToShow] = useState(fundations);
    const [currentList, setCurrentList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(3);
    const [active, setActive] = useState({
        fundations: true,
        organizations: false,
        local: false
    });
    const activeStyle = {
        border: "0.75px solid gray"
    };

    const NumbersOfPages = (list) => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(list.length / dataPerPage); i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };
    const handleClick = e => {
        setCurrentPage(e.target.id);
    };

    useEffect(() => {
        setCurrentList(objectToShow.items.slice(dataPerPage * (currentPage - 1), dataPerPage * currentPage))
    }, [currentPage, objectToShow]);

    return (
        <div className="start" id="ourHelp">
            <div>
                <h1>Komu pomagamy?</h1>
                <img className="decoration" src={decoration} alt=""/>
            </div>
            <div className="button btns">
                <button style={active.fundations ? activeStyle:{}} className="navlink" onClick={() => {
                    setObjectToShow(fundations);
                    setCurrentPage(1);
                    setActive({
                        fundations: true,
                        organizations: false,
                        local: false
                    })
                }}>Fundacjom
                </button>
                <button style={active.organizations ? activeStyle:{}} className="navlink" onClick={() => {
                    setObjectToShow(organizations);
                    setCurrentPage(1);
                    setActive({
                        fundations: false,
                        organizations: true,
                        local: false
                    })
                }}>Organizacjom pozarządowym
                </button>
                <button style={active.local ? activeStyle:{}} className="navlink" onClick={() => {
                    setObjectToShow(local);
                    setCurrentPage(1);
                    setActive({
                        fundations: false,
                        organizations: false,
                        local: true
                    })
                }}>Lokalnym zbiórkom
                </button>

            </div>
            <h2>{objectToShow.desc}</h2>
            <div className="helpFor">
                <ul>
                    {currentList.map((el, ind) =>
                        <li key={ind}>
                            <div><h1>{el.header}</h1><h3>{el.subheader}</h3></div>
                            <h3>{el.desc}</h3></li>)}
                </ul>
                <ul id="page-numbers">{objectToShow.items.length >3 ?
                    NumbersOfPages(objectToShow.items).map((number, ind) => {
                        if (ind === currentPage - 1) {
                            return (
                                <li style={{border: "0.75px solid gray"}} key={number} id={number}
                                    onClick={handleClick}>
                                    {number}
                                </li>
                            );
                        } else {
                            return (
                                <li key={number} id={number} onClick={handleClick}>
                                    {number}
                                </li>
                            )
                        }
                    }):<li></li>}
                </ul>
            </div>
        </div>
    );
}