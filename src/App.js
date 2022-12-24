// import { useEffect, useState } from "react";
import "./App.css";
// ///topic useEffect
// function App() {
//   const [count, setCount] = useState(0);
//   // const [isLove, setIsLOve] = useState(false);
//   const [isGoal, setIsGoal] = useState(false);
//   const IncrementHandler = () => {
//     setCount((previous) => previous + 1);
//   };

//   // useEffect(() => {
//   //   console.log("useEffect ran");
//   //   setInterval(() => {
//   //     setCount((previousCount) => previousCount + 1);
//   //   }, 6000);
//   // }, []);

//   // useEffect(() => {
//   //   console.log("ran");
//   //   setIsLOve(!isLove);
//   // }, [count === 10]);

//   useEffect(() => {
//     setIsGoal(!isGoal);
//   }, [count]);
//   return (
//     <div className="App">
//       <h1>Count:{count}</h1>
//       {/* <h1>I {isLove ? "love" : "hate"} You</h1> */}
//       <h1>{isGoal ? "Goal" : "No Goal"}</h1>
//       <button onClick={IncrementHandler}>Increment</button>
//     </div>
//   );
// }

// export default App;

import React from "react";
import User from "./components/User";

const App = () => {
  return (
    <div>
      <User />
    </div>
  );
};

export default App;
