import React from "react";

function Dashboard() {
  return (
    <div className="h-screen flex flex-col bg-gray-600">
      <div className="flex flex-col text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-[80vw] mx-auto mt-4 rounded-md p-2">
        <div className="flex flex-row space-x-2">
          <a href="#">Home</a>
          <span>&#187;</span>
          <span className="text-orange-500">Portfolio</span>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-lg font-semibold">
            PORTFOLIO INVESTMENT DASHBOARD
          </h1>
          <div className="flex flex-row">
            <div className="flex flex-col pr-2 border-r-2">
              <span>My Net Worth</span>
              <span className="font-semibold">81564</span>
            </div>
            <div className="flex flex-col pr-2 pl-2">
              <span>My Assets</span>
              <span className="font-semibold">81564</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-[80vw] mx-auto mt-4 rounded-md p-2">
        <div className="flex flex-row space-x-10">
          <div className="flex flex-col pr-2 border-r-2">
            <span>Invested</span>
            <span className="font-semibold">65820</span>
          </div>
          <div className="flex flex-col pr-2 pl-2 border-r-2">
            <span>Current</span>
            <span className="font-semibold">81564</span>
          </div>
          <div className="flex flex-col pr-2 pl-2 border-r-2">
            <span>Overall P&L</span>
            <span className="font-semibold">15744</span>
          </div>
          <div className="flex flex-col pr-2 pl-2 border-r-2">
            <span>Day P&L</span>
            <span className="font-semibold">1230</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400  w-[80vw] uppercase mx-auto mt-4 rounded-md p-2">
        <div className="flex flex-row">
          <button className="bg-orange-400 text-white rounded-lg p-1">+ Add Transaction</button>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Symbol
                </th>
                <th scope="col" class="px-6 py-3">
                  Net Qty
                </th>
                <th scope="col" class="px-6 py-3">
                  Avg. Price
                </th>

                {/* <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th> */}
                <th scope="col" class="px-6 py-3">
                  LTP
                </th>
                <th scope="col" class="px-6 py-3">
                  Current Value
                </th>
                <th scope="col" class="px-6 py-3">
                  Day P&L
                </th>
                <th scope="col" class="px-6 py-3">
                  Day %
                </th>
                <th scope="col" class="px-6 py-3">
                  Overall P&L
                </th>
                <th scope="col" class="px-6 py-3">
                  Overall %
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  JIOFIN
                </th>
                <td class="px-6 py-4">50</td>
                <td class="px-6 py-4">228.5</td>
                <td class="px-6 py-4">246.8</td>
                <td class="px-6 py-4">12500</td>
                <td class="px-6 py-4">500</td>
                <td class="px-6 py-4">4%</td>
                <td class="px-6 py-4">5400</td>
                <td class="px-6 py-4">19%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>  
    </div>
  );
}

export default Dashboard;
