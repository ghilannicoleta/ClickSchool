import React, { useState } from "react";
import Counter from "./counterComponents/Counter";
import Steper from "./counterComponents/Steper";
// import LikeContainer from "./components/LikeContainer";
import Button from "./counterComponents/Button";
import ClickBotton from "./counterComponents/ClickBotton";

function useAppState(defaulStep, defaulLiked) {
  const [step, setStep] = useState(defaulStep);
  const [liked, setLiked] = useState(defaulLiked);

  return {
    step: step * 2,
    setStep,
    liked,
    setLiked,
  };
}

function App() {
  const { step, setStep, liked, setLiked } = useAppState(4, false);
  return (
    <div className="flex">
      <ClickBotton hover afterClickText="Yoooooo click">
        Here are children
      </ClickBotton>

      <Counter step={step} />
      <Steper onChange={(value) => setStep(value)} maxValue={3} />
      {!liked ? (
        <Button onClick={() => setLiked(true)}>Like me</Button>
      ) : (
        <span>You liked</span>
      )}
    </div>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       steperValue: 1,
//       liked: false,
//     };
//   }
//   render() {
//     return (
//       <div className="flex">
//         <Counter step={this.state.steperValue} />
//         <Steper
//           onChange={(value) => this.setState({ steperValue: value })}
//           maxValue={3}
//         />
//       </div>
//     );
//   }
// }

export default App;
