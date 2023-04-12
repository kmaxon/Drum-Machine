import React from 'react';

function AudioButton({ audioSrc, onKeyDown, onClick, soundName, onPlay }) {
    function handleAudio() {
        const audio = new Audio(audioSrc);
        audio.play();
        onPlay(soundName);
    };

    function handleKeyDown(event) {
        if (event.key === onKeyDown) {
            handleAudio();
        };
    };

    const drumPadStyle = {
        width: "26%",
        height: "25%",
        boxShadow: "5px 5px 10px #40004D",
        borderRadius: "5px",
        margin: "10px"
    }

    const buttonStyle = {
        width: "100%",
        height: "100%",
        backgroundColor: "#BC00E3",
        borderRadius: "5px",
        color: "white",
        fontSize: "30px",
        fontWeight: "bold"
    }

    return (
        <div className="drum-pad" id={soundName} style={drumPadStyle} >
            <button 
            style={buttonStyle}
            onClick={handleAudio} 
            onKeyDown={handleKeyDown}>
                {onClick}
            </button>
        </div>
    );
}

export default AudioButton;