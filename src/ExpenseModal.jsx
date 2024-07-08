import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './ExpenseModal.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#444',
    borderRadius: '10px',
    color: '#fff',
  },
};

Modal.setAppElement('#root');

const ExpenseModal = ({ setIsOpen, modalIsOpen, closeModal, seExpenses, currentExpense, setCurrentExpense }) => {
  const [formValues, setFormValues] = useState({
    title: '',
    amount: '',
    category: '',
    date: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (currentExpense) {
      setFormValues({
        title: currentExpense.title,
        amount: currentExpense.amount,
        category: currentExpense.category,
        date: currentExpense.date
      });
    } else {
      setFormValues({
        title: '',
        amount: '',
        category: '',
        date: ''
      });
    }
  }, [currentExpense]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.title = formValues.title ? '' : 'This field is required.';
    tempErrors.amount = formValues.amount ? '' : 'This field is required.';
    tempErrors.category = formValues.category ? '' : 'This field is required.';
    tempErrors.date = formValues.date ? '' : 'This field is required.';
    setErrors({ ...tempErrors });
    return Object.values(tempErrors).every(x => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (currentExpense) {
        seExpenses(prevExpenses => prevExpenses.map(exp => (exp.id === currentExpense.id ? { ...formValues, id: currentExpense.id } : exp)));
        setCurrentExpense(null);
      } else {
        seExpenses(prevExpenses => [...prevExpenses, { ...formValues, id: Date.now() }]);
      }
      closeModal();
    }
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add/Edit Expense"
      >
        <h2 style={{ color: 'white' }}>{currentExpense ? 'Edit Expense' : 'Add Expense'}</h2>
        <form onSubmit={handleSubmit}>
          <div
            className="modalContent"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem'
            }}
          >
            <div>
              <input
                type="text"
                placeholder="Title"
                name="title"
                style={{ padding: '1rem', borderRadius: '10px', width: '100%' }}
                onChange={handleChange}
                value={formValues.title}
              />
              {errors.title && <div style={{ color: 'red', fontSize: '0.8rem' }}>{errors.title}</div>}
            </div>
            <div>
              <input
                type="number"
                placeholder="Amount"
                name="amount"
                style={{ padding: '1rem', borderRadius: '10px', width: '100%' }}
                onChange={handleChange}
                value={formValues.amount}
              />
              {errors.amount && <div style={{ color: 'red', fontSize: '0.8rem' }}>{errors.amount}</div>}
            </div>
            <div>
              <input
                type="text"
                placeholder="Category"
                name="category"
                style={{ padding: '1rem', borderRadius: '10px', width: '100%' }}
                onChange={handleChange}
                value={formValues.category}
              />
              {errors.category && <div style={{ color: 'red', fontSize: '0.8rem' }}>{errors.category}</div>}
            </div>
            <div>
              <input
                type="date"
                placeholder="Date"
                name="date"
                style={{ padding: '1rem', borderRadius: '10px', width: '100%' }}
                onChange={handleChange}
                value={formValues.date}
              />
              {errors.date && <div style={{ color: 'red', fontSize: '0.8rem' }}>{errors.date}</div>}
            </div>
          </div>
          <div className="buttonGroup" style={{ marginTop: '1rem' }}>
            <button
              type="submit"
              className="submitBtn"
              style={{
                backgroundColor: '#4caf50',
                color: '#fff',
                padding: '1rem',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                width: '100%',
                marginRight: '0.5rem'
              }}
            >
              {currentExpense ? 'Update' : 'Add'}
            </button>
            <button
              type="button"
              className="cancelBtn"
              onClick={closeModal}
              style={{
                backgroundColor: '#f44336',
                color: '#fff',
                padding: '1rem',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                width: '100%'
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ExpenseModal;
