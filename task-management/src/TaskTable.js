import React from 'react';

function TaskTable({ tasks }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td>{task.name}</td>
            <td>{task.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskTable;
