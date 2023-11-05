import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './Main'; // Import your Main component
import Modal from './Modal'; // Import your Modal component
import ContactAPI from './ContactAPI'; // Import your ContactAPI component

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} /> {/* Main component for the root path */}
        <Route path="/modal" component={Modal} /> {/* Modal component for "/modal" */}
        <Route path="/contact" component={ContactAPI} /> {/* ContactAPI component for "/contact" */}
      </Switch>
    </Router>
  );
}

export default AppRouter;
