import React, {useState} from 'react';

export default function Yellow({counter}) {
    const[text,setText]=useState({
        text1:"text 1",
        text2:"text 2",
        text3:"text 3",
        text4:"text 4"
    });
    return (
        <div className="yellow">
            {counter ===1 ? text.text1 : null}
            {counter ===2 ? text.text2 : null}
            {counter ===3 ? text.text3 : null}
            {counter ===4 ? text.text4 : null}

        </div>
    );
}


