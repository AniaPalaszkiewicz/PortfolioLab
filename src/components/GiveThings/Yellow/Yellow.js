import React, {useState} from 'react';

export default function Yellow({counter}) {
    const [text, setText] = useState({
        text1: "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.",
        text2: "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.",
        text3: "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.",
        text4: "Podaj adres oraz termin odbioru rzeczy."
    });
    return (
        <div className="yellow">
            <h1>Ważne!</h1>
            <h2>
                {counter === 1 ? text.text1 : null}
                {counter === 2 ? text.text2 : null}
                {counter === 3 ? text.text3 : null}
                {counter === 4 ? text.text4 : null}
            </h2>
        </div>

    );
}


