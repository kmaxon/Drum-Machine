function PadBank() {
    return (
        <div id="padBank">
            <div className="drum-pad" id="Heater-1">
                <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" ></audio>
                Q
            </div>
            <div className="drum-pad" id="Heater-2">
                <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" ></audio>
                W
            </div>
            <div className="drum-pad" id="Heater-3">
                <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" ></audio>
                E
            </div>
            <div className="drum-pad" id="Heater-4">
                <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" ></audio>
                A
            </div>
            <div className="drum-pad" id="Clap">
                <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" ></audio>
                S
            </div>
            <div className="drum-pad" id="Open-HH">
                <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" ></audio>
                D
            </div>
            <div className="drum-pad" id="Kick-n'-Hat">
                <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" ></audio>
                Z
            </div>
            <div className="drum-pad" id="Kick">
                <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" ></audio>
                X
            </div>
            <div className="drum-pad" id="Closed-HH">
                <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" ></audio>
                C
            </div>
        </div>
    );
};
 
export default PadBank;