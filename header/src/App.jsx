import React from "react";

import Header from "./Header";

import "./index.css";

const App = () => (
  <main className="font-mono h-screen">
    <Header />
    <div className="container mx-auto my-6">
      <h3 className="text-gray-700 text-2xl font-medium">
        Olá, estou na aplicação Header
      </h3>
    </div>
  </main>
);

export default App;
