import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskTable from './TaskTable';
import FilterButtons from './FilterButtons';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All'); // Default filter

  const handleTaskSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Active') {
      return task.status === 'Active';
    } else if (filter === 'Completed') {
      return task.status === 'Completed';
    }
    return true; // Show all tasks for 'All' filter
  });

  // Sort tasks by the given order
  filteredTasks.sort((a, b) => {
    if (a.status === 'Active' && b.status !== 'Active') return -1;
    if (a.status !== 'Active' && b.status === 'Active') return 1;
    if (a.status === 'Completed' && b.status !== 'Completed') return -1;
    if (a.status !== 'Completed' && b.status === 'Completed') return 1;
    return 0;
  });

  return (
    <div>
      <h1>Task Management</h1>
      <TaskForm onSubmit={handleTaskSubmit} />
      <FilterButtons onFilterChange={handleFilterChange} />
      <TaskTable tasks={filteredTasks} />
    </div>
  );
}

export default App;
