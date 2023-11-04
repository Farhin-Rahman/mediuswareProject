import React, { useState } from 'react';

function TaskForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, status });
    setName('');
    setStatus('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TaskForm;
