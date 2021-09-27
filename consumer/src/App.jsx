import React from "react";

import Header from "header/Header";
import ItemsList from "content/ItemsList";

import "./index.css";

const App = () => (
  <main className="font-mono bg-gray-900 h-screen">
    <Header />
    <div className="container mx-auto py-6">
      <ItemsList />
    </div>
  </main>
);

export default App;
