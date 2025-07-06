import { useState } from 'react';

function ExpenseForm({ members, addExpense }) {
  const [payer, setPayer] = useState('');
  const [amount, setAmount] = useState('');
  const [sharedWith, setSharedWith] = useState([]);
  const [description, setDescription] = useState('');
  const [tip, setTip] = useState('');

  const handleCheckbox = (member) => {
    if (sharedWith.includes(member)) {
      setSharedWith(sharedWith.filter((m) => m !== member));
    } else {
      setSharedWith([...sharedWith, member]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!payer || !amount || sharedWith.length === 0 || !description) {
      alert('Please fill all required fields');
      return;
    }

    const totalAmount = parseFloat(amount) + (parseFloat(tip) || 0);

    addExpense({
      payer,
      amount: totalAmount,
      sharedWith,
      description,
      tip: parseFloat(tip) || 0,
    });

    // Reset form
    setPayer('');
    setAmount('');
    setSharedWith([]);
    setDescription('');
    setTip('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>

      <label>Expense Name:</label>
      <input
        type="text"
        placeholder="e.g., Dinner, Cab, Movie"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <label>Payer:</label>
      <select value={payer} onChange={(e) => setPayer(e.target.value)}>
        <option value="">Select</option>
        {members.map((m, idx) => (
          <option key={idx} value={m}>{m}</option>
        ))}
      </select>

      <br /><br />

      <label>Amount (₹):</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <label>Optional Tip or Tax (₹):</label>
      <input
        type="number"
        placeholder="e.g., 20"
        value={tip}
        onChange={(e) => setTip(e.target.value)}
      />

      <br /><br />

      <label>Shared With:</label><br />
      {members.map((m, idx) => (
        <label
          key={idx}
          style={{
            display: 'block',
            cursor: 'pointer',
            marginBottom: '5px',
            paddingLeft: '5px'
          }}
        >
          <input
            type="checkbox"
            checked={sharedWith.includes(m)}
            onChange={() => handleCheckbox(m)}
            style={{ marginRight: '8px' }}
          />
          {m}
        </label>
      ))}

      <br />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
