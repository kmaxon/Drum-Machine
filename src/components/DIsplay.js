import React from "react";

function Display({ playingSound }) {
    return (
        <div id="display">
            {playingSound && <p>Playing {playingSound}</p>}
        </div>
    );
};

export default Display;