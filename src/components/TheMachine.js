import React, { useState, useEffect } from 'react';
import AudioButton from './AudioButton';
import Display from "./Display";

function TheMachine() {
    const [playingSound, setPlayingSound] = useState(null);

    function handlePlay(soundName) {
        setPlayingSound(soundName);
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    });

    function handleKeyDown(event) {
        switch(event.key.toUpperCase()) {
            case "Q":
                playAudio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", "Heater-1");
                break;
            case "W":
                playAudio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", "Heater-2");
                break;
            case "E":
                playAudio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", "Heater-3");
                break;
            case "A":
                playAudio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", "Heater-4");
                break;
            case "S":
                playAudio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", "Clap");
                break;
            case "D":
                playAudio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", "Open-HH");
                break;
            case "Z":
                playAudio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", "Kick-n' Hat");
                break;
            case "X":
                playAudio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", "Kick");
                break;
            case "C":
                playAudio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", "Closed-HH");
                break;
            default:
                break;
        }
    }

    function playAudio(audioSrc, soundName) {
        const audio = new Audio(audioSrc);
        audio.play();
        setPlayingSound(soundName);
    }

    const borderStyle = {
        border: "solid #40004D 15px",
        marginTop: "250px"
    }

    const drumMachineStyle = {
        width: "300px",
        height: "315px",
        border: "solid white 5px",
        position: "relative",
        display: "flex",
    }

    const padBankStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignContent: "space-between",
        width: "300px",
        height: "230px",
    }

    return (
        <div style={borderStyle}>
            <div id="drum-machine" style={drumMachineStyle}>
                <div id="pad-bank" style={padBankStyle}>
                    <AudioButton 
                        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" 
                        onKeyDown="Q" 
                        onClick="Q"
                        soundName="heater-1" 
                        onPlay={handlePlay}
                    />
                    <AudioButton 
                        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                        onKeyDown="W"
                        onClick="W"
                        soundName="heater-2" 
                        onPlay={handlePlay}
                    />
                    <AudioButton 
                        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                        onKeyDown="E"
                        onClick="E"
                        soundName="heater-3" 
                        onPlay={handlePlay}
                    />
                    <AudioButton 
                        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
                        onKeyDown="A"
                        onClick="A"
                        soundName="heater-4" 
                        onPlay={handlePlay}
                    />
                    <AudioButton 
                        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                        onKeyDown="S"
                        onClick="S"
                        soundName="Clap" 
                        onPlay={handlePlay}
                    />
                    <AudioButton 
                        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                        onKeyDown="D"
                        onClick="D"
                        soundName="Open-HH" 
                        onPlay={handlePlay}
                    />
                    <AudioButton 
                        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                        onKeyDown="Z"
                        onClick="Z"
                        soundName="Kick-n' Hat" 
                        onPlay={handlePlay}
                    />
                    <AudioButton 
                        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                        onKeyDown="X"
                        onClick="X"
                        soundName="Kick" 
                        onPlay={handlePlay}
                    />
                    <AudioButton 
                        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                        onKeyDown="C"
                        onClick="C"
                        soundName="Closed-HH" 
                        onPlay={handlePlay}
                    />
                </div>
                <Display playingSound={playingSound} />
            </div>
        </div>
        
    );
};

export default TheMachine;