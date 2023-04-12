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

    return (
        <div className="drum-pad" id={soundName} >
            <button 
                onClick={handleAudio} 
                onKeyDown={handleKeyDown}>
                {onClick}
            </button>
        </div>
    );
}

export default AudioButton;