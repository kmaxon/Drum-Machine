// div for drum machine (id="drum-machine") contains all elements
// div for display (id="display")  
// - where the description of the audio file that is playing goes
// div for pad-bank (id="pad-bank") contains all 9 drum pads
// - each drum pad needs a className="drum-pad"
// - a unique id that describes the audio clip it will trigger
// - an inner text that corresponds to the keys on the drum maching
// - - Q, W, E, A, S, D, Z, X, C - must be in this order
// within each .drum-pad, there should be an HTML5 audio element 
// - with a src attribute pointing to an audio clip, a class name of clip
// - and an id corresponding to the inner text of its parent (the keys)
// should be able to click on the button with the mouse
// - or its corresponding key and the audio element should be triggered

import TheMachine from './components/TheMachine'

function App() {
  return (
    <div>
      <TheMachine />
    </div>
  );
};

export default App;
