import React from "react";

import ItemsList from "./ItemsList";

import "./index.css";

const App = () => (
  <main className="font-mono bg-gray-900 h-screen">
    <div className="container mx-auto py-6">
      <ItemsList />
    </div>
  </main>
);

export default App;
