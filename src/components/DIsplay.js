import React from "react";

function Display({ playingSound }) {
    const displayStyle = {
        border: "solid #40004D 15px",
        width: "270px",
        height: "50px",
        alignItems: "center",
        position: "absolute",
        bottom: "0",
        backgroundColor: "#BC00E3"
    }

    const pStyle = {
        fontSize: "25px",
        textAlign: "center",
        margin: "10px",
        color: "white"
    }

    return (
        <div id="display" style={displayStyle}>
            {playingSound && <p style={pStyle}>{playingSound}</p>}
        </div>
    );
};

export default Display;