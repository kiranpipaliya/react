import React, { Fragment } from "react/cjs/react.production.min";
import Header from "./componant/Layout/Header";
import Meals from "./componant/Meal/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
