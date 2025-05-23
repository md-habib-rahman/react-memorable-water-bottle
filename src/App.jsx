import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/Bottles/Bottles";

const bottlesPromise = fetch("bottles.json").then((res) => res.json());

function App() {
  //   console.log(bottlesPromise);
  return (
    <>
      <h1>Buy Awesome Water Bottle</h1>
      <Suspense fallback={<h2>Bottles are loading....</h2>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
