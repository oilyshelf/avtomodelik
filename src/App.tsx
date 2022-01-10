import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/index.css";
import Home from "./components/Home";
import Editor from "./components/Editor";

const App = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gray-200">
      <div className="bg-red-700 flex justify-center p-4">
        <h1 className="text-white shadow-md underline bold lg:text-8xl md:text-6xl text-4xl font-mono transition-all duration-100 ease-linear hover:scale-110 ">
          автомодлик
        </h1>
      </div>
      <div className=" outline outline-2 outline-gray-500 h-screen w-screen">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/edit" exact>
            <Editor />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
