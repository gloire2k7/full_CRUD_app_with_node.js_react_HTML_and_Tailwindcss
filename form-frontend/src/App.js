import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormPage from './components/FormPage';
import FormList from './components/FormList';
import FormEdit from './components/FormEdit';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FormPage} />
        <Route path="/forms" component={FormList} />
        <Route path="/edit/:id" component={FormEdit} />
      </Switch>
    </Router>
  );
}
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => console.error('MongoDB connection error:', error));

export default App;
