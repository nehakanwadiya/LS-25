import { useState } from 'react';
import GroupForm from './components/GroupForm';
import MembersList from './components/MembersList';
import ExpenseForm from './components/ExpenseForm';
import './App.css';

function App() {
  const [groupName, setGroupName] = useState('');
  const [members, setMembers] = useState([]);
  const [membersLocked, setMembersLocked] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [expensesLocked, setExpensesLocked] = useState(false);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="App">
      <h1>SplitNow+</h1>

      {!groupName && <GroupForm setGroupName={setGroupName} />}

      {groupName && (
        <>
          <h2>Group: {groupName}</h2>

          {!membersLocked && (
            <MembersList
              members={members}
              setMembers={setMembers}
              setMembersLocked={setMembersLocked}
            />
          )}

          {membersLocked && !expensesLocked && (
            <>
              <ExpenseForm members={members} addExpense={addExpense} />
              {expenses.length > 0 && (
                <button onClick={() => setExpensesLocked(true)}>
                  Done Adding Expenses
                </button>
              )}
            </>
          )}

          {expensesLocked && (
            <div style={{ marginTop: '20px' }}>
              <h2>All Expenses Summary</h2>

              {expenses.map((exp, idx) => (
                <div key={idx} className="expense-card">
                  <strong>{exp.description}</strong><br />
                  <b>{exp.payer}</b> paid ₹{exp.amount.toFixed(2)}<br />
                  Shared by: {exp.sharedWith.join(', ')}<br />
                  {exp.tip > 0 && <i>Tip/Tax included: ₹{exp.tip.toFixed(2)}</i>}
                </div>
              ))}

              <h2>Final Balances</h2>
              {(() => {
                const balances = {};
                members.forEach((m) => (balances[m] = 0));

                expenses.forEach((exp) => {
                  const { payer, amount, sharedWith } = exp;
                  const share = amount / sharedWith.length;
                  sharedWith.forEach((member) => {
                    if (member !== payer) {
                      balances[member] -= share;
                      balances[payer] += share;
                    }
                  });
                });

                const owes = [];
                const gets = [];

                for (const [person, balance] of Object.entries(balances)) {
                  if (balance < -0.01) owes.push({ person, amt: -balance });
                  else if (balance > 0.01) gets.push({ person, amt: balance });
                }

                const settlements = [];
                while (owes.length && gets.length) {
                  let debtor = owes[0];
                  let creditor = gets[0];
                  const minAmt = Math.min(debtor.amt, creditor.amt);
                  settlements.push(`${debtor.person} owes ${creditor.person} ₹${minAmt.toFixed(2)}`);
                  debtor.amt -= minAmt;
                  creditor.amt -= minAmt;
                  if (debtor.amt < 0.01) owes.shift();
                  if (creditor.amt < 0.01) gets.shift();
                }

                return (
                  <>
                    <ul>
                      {settlements.map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>

                    {/* WhatsApp share button */}
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(
                        'SplitNow+ Group: ' + groupName + '\n' +
                        settlements.join('\n')
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button style={{ background: '#25D366', marginTop: '10px' }}>
                        📤 Share on WhatsApp
                      </button>
                    </a>
                  </>
                );
              })()}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
