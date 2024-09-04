import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker"; // Import DatePicker if using a package like react-datepicker
import "react-datepicker/dist/react-datepicker.css";
import Table from "react-bootstrap/Table";

const Wallet = () => {
  const [keyword, setKeyword] = useState("teacher");
  const [debitCreditType, setDebitCreditType] = useState("mastercard");
  const [dateFrom, setDateFrom] = useState(new Date(2024, 9, 10)); // October 10, 2024
  const [dateTo, setDateTo] = useState(new Date(2025, 9, 10)); // October 10, 2025

  const [transactions, setTransactions] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your search function here
  };

  const handleReset = () => {
    setKeyword("www");
    setDebitCreditType("mastercard");
    setDateFrom(new Date(2024, 11, 14)); // December 14, 2024
    setDateTo(new Date(2025, 9, 10)); // October 10, 2025
    // Optionally handle additional reset logic
  };

  //   const logedin = JSON.parse(localStorage.getItem("user"));
  //   useEffect(() => {
  //     if (logedin) {
  //       const fetchData = async () => {
  //         try {
  //           const token = JSON.parse(localStorage.getItem("user")).access_token;
  //           if (token) {
  //             const response = await fetch(
  //               `https://unih0me.com/api/auth/wallets`,
  //               {
  //                 method: "GET",
  //                 headers: {
  //                   Authorization: `Bearer ${token}`,
  //                   "Content-Type": "application/json",
  //                 },
  //               }
  //             );

  //             if (!response.ok) {
  //               throw new Error("Network response was not ok");
  //             }

  //             const data = await response.json();
  //             setTransactions(data.data.wallets);
  //           }
  //         } catch (error) {
  //           console.error("Error fetching data:", error);
  //         }
  //       };
  //       fetchData();
  //     } else {
  //       window.location.href = "/login";
  //     }
  //   }, []);

  return (
    <div className="min-h-full w-full bg-white flex flex-col items-center pl-0 py-4">
      <div className="bg-white w-full">
        <div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Current Balance</span>
            <span className="text-3xl font-bold text-green-600">
              $12,340.50
            </span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Recent Transactions</span>
            <span className="text-blue-600 cursor-pointer hover:underline">
              View All
            </span>
          </div>
          <ul className="space-y-4">
            <li className="flex justify-between items-center bg-gray-50 p-4 rounded-md">
              <div>
                <h3 className="text-gray-800 font-semibold">
                  Payment Received
                </h3>
                <span className="text-gray-500 text-sm">Aug 1, 2024</span>
              </div>
              <img src="/images/icon_wallet.svg" alt="" />
              <span className="text-green-600">+ $500.00</span>
            </li>
            <li className="flex justify-between items-center bg-gray-50 p-4 rounded-md">
              <div>
                <h3 className="text-gray-800 font-semibold">Payment Sent</h3>
                <span className="text-gray-500 text-sm">Jul 28, 2024</span>
              </div>
              <span className="text-red-600">- $150.00</span>
            </li>
            {/* Add more transactions as needed */}
          </ul>
          <button className="my-6 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200">
            Add Funds
          </button>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  Search By Keyword
                </label>
                <input
                  type="text"
                  name="keyword"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Keyword"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  Type
                </label>
                <select
                  name="debit_credit_type"
                  value={debitCreditType}
                  onChange={(e) => setDebitCreditType(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option value="-1">Both-debit/credit</option>
                  <option value="1">Credit</option>
                  <option value="2">Debit</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  From
                </label>
                <DatePicker
                  selected={dateFrom}
                  onChange={(date) => setDateFrom(date)}
                  placeholderText="From Date"
                  dateFormat="yyyy-MM-dd"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  To
                </label>
                <DatePicker
                  selected={dateTo}
                  onChange={(date) => setDateTo(date)}
                  placeholderText="To Date"
                  dateFormat="yyyy-MM-dd"
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium text-sm rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Search
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center px-4 py-2 bg-gray-300 text-gray-800 font-medium text-sm rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Start of table of transactions */}
      {transactions.length ? (
        <div className="mt-4 transactions w-full p-5">
          <Table striped bordered hover>
            <thead>
              <tr variant="dark">
                <th>Sender ID</th>
                <th>Sender Name</th>
                <th>Reciver Name</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Description</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.sender.id}</td>
                  <td>{transaction.sender.name}</td>
                  <td>{transaction.receiver.name}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.date}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.type}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : null}
      {/* End of table of transactions */}
    </div>
  );
};

export default Wallet;
