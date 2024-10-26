import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { Provider } from "react-redux";
import { store } from "../app/store";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Provider>
  );
};

export default App;
