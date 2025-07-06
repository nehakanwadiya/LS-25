import { useState } from 'react';

function GroupForm({ setGroupName }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setGroupName(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Your Group</h2>
      <input
        type="text"
        placeholder="Enter group name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Set Group</button>
    </form>
  );
}

export default GroupForm;
