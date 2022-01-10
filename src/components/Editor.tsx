import React from "react";
import Graph from "./Graph";

export default () => {
  return (
    <div>
      <div className="bg-red-800 flex items-center justify-center text-white">
        Navbar
      </div>
      <div className="  flex h-screen">
        <div className="w-3/4 p-1 ">
          <Graph />
        </div>
        <div className="w-1/4 bg-zinc-400 p-1 flex justify-center">
          <h1 className="text-4xl font-mono text-white"> Nodes</h1>
        </div>
      </div>
    </div>
  );
};
