import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home'; // Import your Home component
import Task1 from './Task1'; // Import your Task1 component
import Task2 from './Task2'; // Import your Task2 component

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} /> {/* Home component for the root path */}
        <Route path="/task1" component={Task1} /> {/* Task1 component for "/task1" */}
        <Route path="/task2" component={Task2} /> {/* Task2 component for "/task2" */}
      </Switch>
    </Router>
  );
}

export default AppRouter;
