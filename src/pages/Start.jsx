import React, { useState } from "react";
import Rose from "./Rose";
import './Start.css';
import Letter from "./Letter";

const Start = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    }
    return (
        <>
            {clicked ? (
                <>
                    <Letter />
                </>
            ) : (
                <>
                    <Rose />
                    <div className="text">
                    <h1>"Every flower is a soul blossoming in nature"</h1>
                    <p>I have somthing spacial for you <span onClick={handleClick}>Click here</span></p>
                    </div>
                </>
            )}
        </>
    )
}

export default Start;