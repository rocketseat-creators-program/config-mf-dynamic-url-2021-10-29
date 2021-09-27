import React from "react";

export default () => (
  <div className="grid gap-4 grid-cols-3">
    <div className="bg-gray-800 p-8 rounded-lg h-72">
      <div className="flex items-center text-gray-200 my-3">
        <i className="text-gray-200 gg-credit-card mx-5 my-3"></i>
        <h3 className="ml-8 text-gray-300 text-2xl font-medium">Credit Card</h3>
      </div>
      <p className="text-gray-300 mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae!
      </p>
    </div>
    <div className="bg-gray-800 p-8 rounded-lg h-72">
      <div className="flex items-center text-gray-200 my-3">
        <i className="text-gray-200 gg-dollar mx-5 my-3"></i>
        <h3 className="ml-8 text-gray-300 text-2xl font-medium">Wallet</h3>
      </div>
      <p className="text-gray-300 mt-8">
        Veritatis obcaecati tenetur iure eius earum ut molestias architecto
        voluptate aliquam nihil, eveniet aliquid culpa officia aut!
      </p>
    </div>
    <div className="bg-gray-800 p-8 rounded-lg h-72">
      <div className="flex items-center my-3">
        <i className="text-gray-200 gg-bell mx-5"></i>
        <h3 className="ml-8 text-gray-300 text-2xl font-medium">
          Notifications
        </h3>
      </div>
      <p className="text-gray-300 mt-8">
        Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium
        molestias eos sapiente officiis modi at sunt excepturi?
      </p>
    </div>
  </div>
);
