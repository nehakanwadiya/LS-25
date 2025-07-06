import { useState } from 'react';

function MembersList({ members, setMembers, setMembersLocked }) {
  const [name, setName] = useState('');

  const addMember = () => {
    if (name.trim() !== '') {
      setMembers([...members, name.trim()]);
      setName('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // prevent form submit or page reload
      addMember();
    }
  };

  const handleDone = () => {
    if (members.length >= 2) {
      setMembersLocked(true);
    } else {
      alert("Add at least 2 members to continue.");
    }
  };

  return (
    <div>
      <h2>Add Group Members</h2>
      <input
        type="text"
        placeholder="Enter member name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addMember}>Add</button>

      <ul>
        {members.map((m, idx) => (
          <li key={idx}>{m}</li>
        ))}
      </ul>

      <button onClick={handleDone} disabled={members.length < 2}>
        Done Adding Members
      </button>
    </div>
  );
}

export default MembersList;
