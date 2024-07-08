import React, { useState } from 'react';
import Modal from 'react-modal';
import './IncomeModal.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const IncomeModal = ({ isOpen, closeModal, addIncome }) => {
  const [amount, setAmount] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { value } = e.target;
    setAmount(value);
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.amount = amount ? '' : 'This field is required.';
    setErrors({ ...tempErrors });
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addIncome(parseFloat(amount));
    }
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Income"
      >
        <h2 style={{ color: 'black' }}>Add Income</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Amount"
              name="amount"
              style={{ padding: '1rem', borderRadius: '10px', width: '100%' }}
              onChange={handleChange}
              value={amount}
            />
            {errors.amount && (
              <div style={{ color: 'red', fontSize: '0.8rem' }}>
                {errors.amount}
              </div>
            )}
          </div>
          <div style={{ marginTop: '10px' }}>
            <button
              type="submit"
              style={{
                backgroundColor: '#F4BB4A',
                padding: '1rem',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Add Income
            </button>
            <button
              onClick={closeModal}
              style={{
                backgroundColor: '#D9D9D9',
                padding: '1rem',
                borderRadius: '10px',
                border: 'none',
                marginLeft: '15px',
                cursor: 'pointer',
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

export default IncomeModal;
