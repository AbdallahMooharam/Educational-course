import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker"; // Import DatePicker if using a package like react-datepicker
import "react-datepicker/dist/react-datepicker.css";
import Table from "react-bootstrap/Table";
import axios from "axios";

const Wallet = () => {
  const [keyword, setKeyword] = useState("teacher");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [debitCreditType, setDebitCreditType] = useState("mastercard");
  const [dateFrom, setDateFrom] = useState(new Date(2024, 9, 10)); // October 10, 2024
  const [dateTo, setDateTo] = useState(new Date(2025, 9, 10)); // October 10, 2025
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);


  const handleReset = () => {
    setKeyword("www");
    setDebitCreditType("mastercard");
    setDateFrom(new Date(2024, 11, 14)); // December 14, 2024
    setDateTo(new Date(2025, 9, 10)); // October 10, 2025
    // Optionally handle additional reset logic
  };

  const logedin = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    fetchData()

  }, []);

  const fetchData = async () => {
    if (logedin != "") {

      try {
        const response = await axios.get(
          `https://unih0me.com/api/auth/wallets`,
          {
            headers: {
              "Authorization": `Bearer ${logedin.access_token}`,
              "Content-Type": "application/json",
            }
          }
        );

        setTransactions(response.data.data.wallets);
      }

      catch (error) {
        console.error("Error fetching data:", error);
      }

      finally {
        setLoading(false)
      }
    }
    else {
      window.location.href = "/login";
    }
  };

  if (loading) {
    return <p>Loading...</p>
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (logedin != "") {
      const response = await axios.pos(
        `https://unih0me.com/api/auth/wallet/store`,
        {
          headers: {
            "Authorization": `Bearer ${logedin.access_token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount,
            description,
          }),
        }
      );
      let newFund = response.json();
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    }
  };

  //   const validateAmount = (value) => {
  //     // Regular expression to allow only positive numbers with up to two decimal places
  //     const regex = /^[1-9]\d*$/;
  //     console.log(value);
  //     console.log(regex.test(value));

  //     if (regex.test(value) || value === "") {
  //       setAmount(value);
  //     }
  //     if (!regex.test(value)) {
  //       setError(
  //         "Invalid Amount format. Must be a positive number with up to two decimal places."
  //       );
  //     } else if (parseFloat(value) <= 0) {
  //       setError("Amount must be greater than zero.");
  //     } else {
  //       setError("");
  //     }
  //   };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    // Regular expression to match only positive numbers
    const regex = /^[1-9]\d*$/;
    if (amount === 0) {
      if (isNaN(e.target.value)) {
        setAmount("");
        return;
      }
      setAmount(e.target.value.slice(1));
    }
    if (regex.test(inputValue) || inputValue === "") {
      setAmount(inputValue);
    }






  };
  return <>

    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white shadow-md rounded-lg w-full max-w-lg p-8">
        <h1 className="text-2xl font-semibold text-gray-800 text-center">
          My Wallet
        </h1>

        <div className="mt-6">
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
              <img src="./images/icon_wallet.svg" />

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

          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200">
            Add Funds
          </button>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  Send Money
                </label>
                <input
                  type="text"
                  name="amount"
                  value={amount}
                  onChange={handleChange}
                  placeholder="amount"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />

                <label className="block text-sm font-medium text-gray-700 mt-4">
                  Put a Note
                </label>
                <textarea
                  type="text"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Put A Note"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium text-sm rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="searchTable d-flex gap-2 mt-5">
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" id="username" type="text" placeholder="Username" />

        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" id="username" type="text" placeholder="Sender Id" />


      </div>
      {/* Start of table of transactions */}
      <div className="mt-4 transactions w-full p-5">
        <Table striped bordered hover>
          <thead>
            <tr variant="dark" className="text-center">
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
            {transactions.map((transaction, index) => (
              <tr key={index} className="text-center">
                <td>{transaction.sender.id}</td>
                <td className="text-start">{transaction.sender.firstname + " " + transaction.sender.lastname}</td>
                <td className="text-start">{transaction.receiver.firstname + " " + transaction.receiver.lastname}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.type}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {/* End of table of transactions */}
    </div>
  </>
};

export default Wallet;
