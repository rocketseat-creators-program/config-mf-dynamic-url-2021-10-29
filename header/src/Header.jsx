import React from "react";

export default () => (
  <div className="bg-purple-600 px-6 py-4 w-full shadow-xl">
    <div className="flex justify-between items-center">
      <div className="text-gray-200 text-white mr-6 text-xl flex items-center">
        <i className="text-purple-400 gg-pokemon mr-6"></i> PokeBank
      </div>
      <nav>
        <ul className="text-white flex justify-between">
          <li>
            <a className="text-white mr-6" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-white mr-6" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="text-white mr-6" href="#">
              Pricing
            </a>
          </li>
          <li>
            <a className="text-white mr-6" href="#">
              Help
            </a>
          </li>
        </ul>
      </nav>
      <button className="text-white px-6 py-2 rounded-md bg-purple-800 shadow-md">
        Login
      </button>
    </div>
  </div>
);
