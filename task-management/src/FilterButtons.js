import React from 'react';

function FilterButtons({ onFilterChange }) {
  return (
    <div>
      <button onClick={() => onFilterChange('Active')}>Active</button>
      <button onClick={() => onFilterChange('Completed')}>Completed</button>
      <button onClick={() => onFilterChange('All')}>All</button>
    </div>
  );
}

export default FilterButtons;
