import "./App.css";
import { IoPizzaOutline } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { useState } from "react";
import ExpenseModal from "./ExpenseModal";
import BarChartComponent from "./BarChartComponent"; 
import PieChartComponent from "./PieChartComponent"; 

function App() {
  const data = [
    {
      id: 1,
      date: "2024-03-20",
      category: "Food",
      amount: 150,
      title: "Samosa",
    },
    {
      id: 2,
      date: "2024-03-21",
      category: "Entertainment",
      amount: 300,
      title: "Movie",
    },
    {
      id: 3,
      date: "2024-03-22",
      category: "Travel",
      amount: 50,
      title: "Auto",
    },
  ];

  const [expenses, seExpenses] = useState(data);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentExpense, setCurrentExpense] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setCurrentExpense(null);
  }

  function handleEdit(expense) {
    setCurrentExpense(expense);
    openModal();
  }

  function handleDelete(id) {
    seExpenses(expenses.filter((expense) => expense.id !== id));
  }

  return (
    <div className="App">
      <h1 style={{ color: "#FFFFFF", marginLeft: "3rem" }}>Expense Tracker</h1>
      <div className="herosection">
        <div className="wbE">
          <h2>Wallet Balance: ₹4500</h2>
          <button className="incomeBtn">+Add Income</button>
        </div>
        <div className="wbE">
          <h2>Expenses: ₹500</h2>
          <button className="expenseBtn" onClick={openModal}>
            +Add Expense
          </button>
        </div>
        <div style={{ width: "100%", maxWidth: "400px" }}>
          <PieChartComponent expenses={expenses} />
        </div>
      </div>
      <ExpenseModal
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        seExpenses={seExpenses}
        currentExpense={currentExpense}
        setCurrentExpense={setCurrentExpense}
      />
      <div className="main">
        <div className="recentT">
          <div>
            <h2 style={{ color: "#FFFFFF" }}>Recent Transactions</h2>
          </div>
          <div className="expense-list">
            {expenses.map((expense) => (
              <div
                key={expense.id}
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
                    <p>{expense.title}</p>
                    <p style={{ color: "#9B9B9B" }}>{expense.date}</p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <p style={{ color: "#F4BB4A" }}>₹{expense.amount}</p>
                  <button
                    className="closeBtn"
                    onClick={() => handleDelete(expense.id)}
                  >
                    <IoMdCloseCircleOutline size={30} />
                  </button>
                  <button
                    className="editBtn"
                    onClick={() => handleEdit(expense)}
                  >
                    <MdOutlineEdit size={30} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="TExpenses">
          <div>
            <h2 style={{ color: "#FFFFFF" }}>Top Expenses </h2>
          </div>
          <div style={{ width: "100%", maxWidth: "400px" }}>
            <BarChartComponent expenses={expenses} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
