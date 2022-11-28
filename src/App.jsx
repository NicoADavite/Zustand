import "./App.css";

import { useBearStore } from "./store";

import zustandBear from "./zustand-bear.png";

function App() {
  const bears = useBearStore((state) => state.bears);

  const bearArray = [];
  for (let i = 0; i < bears; i++) {
    bearArray.push("zustand-bear");
  }

  const BearCounter = () => {
    return <h1>{bears} around here</h1>;
  };

  const Controls = () => {
    const increasePopulation = useBearStore(
      (state) => state.increasePopulation
    );
    return <button onClick={increasePopulation}>one up</button>;
  };

  const ResetBearsControl = () => {
    const removeAllBears = useBearStore((state) => state.removeAllBears);
    return <button onClick={removeAllBears}>kill them all</button>;
  };

  return (
    <div className="App">
      <div>
        {bearArray.map((bear, i) => {
          return (
            <img
              src={zustandBear}
              alt={bear + i}
              width={100}
              height={80}
              key={i}
            />
          );
        })}
      </div>
      {BearCounter()}
      {Controls()}
      {ResetBearsControl()}
    </div>
  );
}

export default App;
