import React from 'react';
import { IoPizzaOutline } from 'react-icons/io5';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { MdOutlineEdit } from 'react-icons/md';
import './ExpenseList.css';

const ExpenseList = ({ expenses, onEdit, onDelete }) => {
  return (
    <div className="expense-list">
      <h2 style={{ color: '#FFFFFF' }}>Recent Transactions</h2>
      {expenses.map((expense) => (
        <div key={expense.id} className="listItem" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginLeft: '7px' }}>
            <div className="icon">
              <IoPizzaOutline />
            </div>
            <div>
              <p>{expense.title}</p>
              <p style={{ color: '#9B9B9B' }}>{expense.date}</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <p style={{ color: '#F4BB4A' }}>Rs {expense.amount}</p>
            <button className="closeBtn" onClick={() => onDelete(expense.id)}>
              <IoMdCloseCircleOutline size={30} />
            </button>
            <button className="editBtn" onClick={() => onEdit(expense)}>
              <MdOutlineEdit size={30} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
