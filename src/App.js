import "./App.css";
import { IoPizzaOutline } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { useState } from "react";

function App() {
  const data = [
    {
      id: 1,
      date: "March 20, 2024",
      category: "Food",
      amount: 150,
      title: "Samosa",
    },
    {
      id: 2,
      date: "March 21, 2024",
      category: "Entertainment",
      amount: 300,
      title: "Movie",
    },
  ];

  const [expenses, seExpenses] = useState(data);

  return (
    <div className="App">
      <h1 style={{ color: "#FFFFFF", marginLeft: "3rem" }}>Expense Tracker</h1>

      <div className="herosection">
        <div className="wbE">
          <h2>Wallet Balance: 4500</h2>
          <button className="incomeBtn">+Add Income</button>
        </div>
        <div className="wbE">
          <h2>Expenses: 500</h2>
          <button className="expenseBtn">+Add Expense</button>
        </div>
        <div>Chart</div>
      </div>
      {/*  */}
      <div className="main">
        <div className="recentT">
          <div>
            <h2 style={{ color: "#FFFFFF" }}>Recent Transactions</h2>
          </div>
          <div>
            <div
              className="listItem"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginLeft: "7px",
                }}
              >
                <div className="icon">
                  <IoPizzaOutline />
                </div>
                <div>
                  <p>Samosa</p>
                  <p style={{ color: "#9B9B9B" }}>March 20, 2024</p>
                </div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <p style={{ color: "#F4BB4A" }}>Rs 150</p>
                <button className="closeBtn">
                  <IoMdCloseCircleOutline size={30} />
                </button>
                <button className="editBtn">
                  <MdOutlineEdit size={30} />
                </button>
              </div>
            </div>
            <hr />
          </div>
        </div>
        {/*  */}

        <div className="TExpenses">
          <div>
            <h2 style={{ color: "#FFFFFF" }}>Top Expenses </h2>
          </div>
          <div>Content</div>
        </div>
      </div>
    </div>
  );
}

export default App;
